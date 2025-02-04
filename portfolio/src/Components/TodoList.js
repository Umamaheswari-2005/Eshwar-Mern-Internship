import React, { useState, useEffect } from 'react';
import { Container, Form, Button, ListGroup, Row, Col, Modal, Badge } from 'react-bootstrap';
import axios from 'axios';
import '../CSS/TodoList.css';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('Medium');
    const [error, setError] = useState('');
    const [showReminderModal, setShowReminderModal] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(null);
    const [reminderDate, setReminderDate] = useState('');
    const [reminders, setReminders] = useState({});

    useEffect(() => {
        fetchTasks();
        fetchReminders();
    }, []);

    const fetchReminders = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            const response = await axios.get('http://localhost:3001/api/notifications', {
                headers: { Authorization: `Bearer ${token}` }
            });
            const reminderMap = {};
            response.data.forEach(reminder => {
                reminderMap[reminder.taskId] = reminder.reminderDate;
            });
            setReminders(reminderMap);
        } catch (error) {
            console.error('Error fetching reminders:', error);
        }
    };

    const fetchTasks = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Please log in to manage tasks');
            return;
        }

        try {
            const response = await axios.get('http://localhost:3001/api/tasks', {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(response.data);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            setError('Failed to fetch tasks');
        }
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Please log in to add tasks');
            return;
        }

        if (!newTask.trim()) {
            setError('Task description is required');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/api/tasks', {
                task: newTask,
                dueDate: dueDate,
                priority: priority,
                completed: false
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTasks([...tasks, response.data]);
            setNewTask('');
            setDueDate('');
            setPriority('Medium');
            setError('');
        } catch (error) {
            console.error('Error adding task:', error);
            setError('Failed to add task');
        }
    };

    const handleSetReminder = async () => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            await axios.post('http://localhost:3001/api/notifications', {
                taskId: selectedTaskId,
                reminderDate: reminderDate
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            // Update reminders state
            setReminders({
                ...reminders,
                [selectedTaskId]: reminderDate
            });

            setShowReminderModal(false);
            setReminderDate('');
            setSelectedTaskId(null);
            setError('');
        } catch (error) {
            console.error('Error setting reminder:', error);
            setError('Failed to set reminder');
        }
    };

    const handleToggleTask = async (taskId) => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            const task = tasks.find(t => t._id === taskId);
            await axios.put(`http://localhost:3001/api/tasks/${taskId}`, {
                completed: !task.completed
            }, {
                headers: { Authorization: `Bearer ${token}` }
            });

            setTasks(tasks.map(task =>
                task._id === taskId ? { ...task, completed: !task.completed } : task
            ));
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (taskId) => {
        const token = localStorage.getItem('token');
        if (!token) return;

        try {
            await axios.delete(`http://localhost:3001/api/tasks/${taskId}`, {
                headers: { Authorization: `Bearer ${token}` }
            });
            setTasks(tasks.filter(task => task._id !== taskId));
            
            // Also delete any associated reminder
            if (reminders[taskId]) {
                await axios.delete(`http://localhost:3001/api/notifications/${taskId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                const newReminders = { ...reminders };
                delete newReminders[taskId];
                setReminders(newReminders);
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <Container className="todo-container">
            <h1 className="text-center mb-4">Todo List</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            
            <Form onSubmit={handleAddTask} className="mb-4">
                <Row className="g-3">
                    <Col md={12}>
                        <Form.Group>
                            <Form.Control
                                type="text"
                                value={newTask}
                                onChange={(e) => setNewTask(e.target.value)}
                                placeholder="Add a new task"
                                className="mb-2"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group>
                            <Form.Control
                                type="datetime-local"
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                placeholder="Due Date"
                            />
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Form.Group>
                            <Form.Select
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                            >
                                <option value="High">High Priority</option>
                                <option value="Medium">Medium Priority</option>
                                <option value="Low">Low Priority</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={3}>
                        <Button type="submit" variant="primary" className="w-100">
                            Add Task
                        </Button>
                    </Col>
                </Row>
            </Form>

            <ListGroup>
                {tasks.map(task => (
                    <ListGroup.Item
                        key={task._id}
                        className={`d-flex justify-content-between align-items-center task-item priority-${task.priority.toLowerCase()}`}
                    >
                        <div className="d-flex align-items-center flex-grow-1">
                            <Form.Check
                                type="checkbox"
                                checked={task.completed}
                                onChange={() => handleToggleTask(task._id)}
                                className="me-3"
                            />
                            <div className="task-details">
                                <span className={task.completed ? 'completed-task' : ''}>
                                    {task.task}
                                </span>
                                <small className="text-muted d-block">
                                    Due: {task.dueDate ? new Date(task.dueDate).toLocaleString() : 'No due date'} | 
                                    Priority: {task.priority}
                                    {reminders[task._id] && (
                                        <span className="ms-2">
                                            <Badge bg="info">
                                                Reminder: {new Date(reminders[task._id]).toLocaleString()}
                                            </Badge>
                                        </span>
                                    )}
                                </small>
                            </div>
                        </div>
                        <div className="task-actions">
                            <Button
                                variant="info"
                                size="sm"
                                className="me-2"
                                onClick={() => {
                                    setSelectedTaskId(task._id);
                                    setShowReminderModal(true);
                                }}
                            >
                                {reminders[task._id] ? 'Update Reminder' : 'Set Reminder'}
                            </Button>
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() => handleDeleteTask(task._id)}
                            >
                                Delete
                            </Button>
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>

            {/* Reminder Modal */}
            <Modal show={showReminderModal} onHide={() => setShowReminderModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Set Reminder</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group>
                        <Form.Label>Reminder Date and Time</Form.Label>
                        <Form.Control
                            type="datetime-local"
                            value={reminderDate}
                            onChange={(e) => setReminderDate(e.target.value)}
                        />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowReminderModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleSetReminder}>
                        Set Reminder
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
};

export default TodoList;
