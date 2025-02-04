import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Badge, Toast } from 'react-bootstrap';
import axios from 'axios';
import '../CSS/Home.css';

const Home = () => {
    const [reminders, setReminders] = useState([]);
    const [currentReminders, setCurrentReminders] = useState([]);
    const [error, setError] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    useEffect(() => {
        fetchReminders();
        requestNotificationPermission();
        
        // Set up interval to check for current reminders every 30 seconds
        const intervalId = setInterval(checkCurrentReminders, 30000);
        // Initial check for current reminders
        checkCurrentReminders();

        return () => clearInterval(intervalId);
    }, []);

    const requestNotificationPermission = async () => {
        try {
            if ('Notification' in window) {
                const permission = await Notification.requestPermission();
                if (permission !== 'granted') {
                    console.log('Notification permission denied');
                }
            }
        } catch (error) {
            console.error('Error requesting notification permission:', error);
        }
    };

    const showNotification = (title, body) => {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, { body });
        }
        // Also show in-app toast
        setToastMessage(body);
        setShowToast(true);
    };

    const fetchReminders = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Please log in to view reminders');
            return;
        }

        try {
            const response = await axios.get('http://localhost:3001/api/notifications', {
                headers: { Authorization: `Bearer ${token}` }
            });

            console.log('Fetched reminders:', response.data); // Debug log
            setReminders(response.data);
        } catch (error) {
            console.error('Error fetching reminders:', error);
            setError('Failed to fetch reminders');
        }
    };

    const checkCurrentReminders = () => {
        const now = new Date();
        const currentTasks = reminders.filter(reminder => {
            const reminderTime = new Date(reminder.reminderDate);
            const timeDiff = Math.abs(now - reminderTime);
            return timeDiff <= 30000; // Within 30 seconds
        });

        // Show notifications for new current reminders
        currentTasks.forEach(reminder => {
            if (!currentReminders.find(r => r._id === reminder._id)) {
                const title = 'Task Reminder';
                const body = `Reminder: ${reminder.taskName} - Due: ${new Date(reminder.dueDate).toLocaleString()}`;
                showNotification(title, body);
            }
        });

        setCurrentReminders(currentTasks);
    };

    const getPriorityVariant = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high':
                return 'danger';
            case 'medium':
                return 'warning';
            case 'low':
                return 'info';
            default:
                return 'secondary';
        }
    };

    const isCurrentReminder = (reminderDate) => {
        const now = new Date();
        const reminderTime = new Date(reminderDate);
        const timeDiff = Math.abs(now - reminderTime);
        return timeDiff <= 30000; // Within 30 seconds
    };

    const formatTimeRemaining = (reminderDate) => {
        const now = new Date();
        const reminder = new Date(reminderDate);
        const diff = reminder - now;

        if (diff < 0) return 'Past due';
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} remaining`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} remaining`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} remaining`;
        return 'Less than a minute';
    };

    return (
        <Container className="home-container">
            <h2 className="text-center mb-4">Tasks with Reminders</h2>
            {error && <div className="alert alert-danger">{error}</div>}

            <Toast 
                show={showToast} 
                onClose={() => setShowToast(false)}
                delay={5000}
                autohide
                className="notification-toast"
            >
                <Toast.Header>
                    <strong className="me-auto">Task Reminder</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>

            <ListGroup>
                {reminders.length > 0 ? (
                    reminders.map(reminder => (
                        <ListGroup.Item
                            key={reminder._id}
                            className={`task-reminder-item ${isCurrentReminder(reminder.reminderDate) ? 'current-reminder' : ''}`}
                        >
                            <div className="d-flex justify-content-between align-items-start">
                                <div className="task-content">
                                    <h5 className="mb-1">
                                        {reminder.taskName}
                                        <Badge 
                                            bg={getPriorityVariant(reminder.priority)}
                                            className="ms-2"
                                        >
                                            {reminder.priority}
                                        </Badge>
                                        {isCurrentReminder(reminder.reminderDate) && (
                                            <Badge bg="success" className="ms-2">
                                                Current Reminder
                                            </Badge>
                                        )}
                                    </h5>
                                    <div className="task-details">
                                        <small className="text-muted">
                                            Due: {reminder.dueDate ? new Date(reminder.dueDate).toLocaleString() : 'No due date'}
                                        </small>
                                        <Badge 
                                            bg={isCurrentReminder(reminder.reminderDate) ? 'success' : 'info'} 
                                            className="ms-3"
                                        >
                                            Reminder: {new Date(reminder.reminderDate).toLocaleString()}
                                        </Badge>
                                        <Badge 
                                            bg="secondary" 
                                            className="ms-3"
                                        >
                                            {formatTimeRemaining(reminder.reminderDate)}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item className="text-center text-muted">
                        No tasks with reminders found
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    );
};

export default Home;
