import React, { useState, useEffect } from 'react';
import { Container, ListGroup, Badge, Button } from 'react-bootstrap';
import axios from 'axios';
import '../CSS/TaskView.css';

const TaskView = () => {
    const [tasks, setTasks] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Please log in to view tasks');
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

    const handleComplete = async (taskId) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('Please log in to complete tasks');
            return;
        }

        try {
            await axios.put(`http://localhost:3001/api/tasks/${taskId}/complete`, {}, {
                headers: { Authorization: `Bearer ${token}` }
            });
            // Remove the completed task from the list
            setTasks(tasks.filter(task => task._id !== taskId));
        } catch (error) {
            console.error('Error completing task:', error);
            setError('Failed to complete task');
        }
    };

    const getPriorityVariant = (priority) => {
        switch (priority.toLowerCase()) {
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

    return (
        <Container className="task-view-container">
            <h2 className="text-center mb-4">Your Tasks</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <ListGroup>
                {tasks.length > 0 ? (
                    tasks.map(task => (
                        <ListGroup.Item
                            key={task._id}
                            className="task-item d-flex justify-content-between align-items-center"
                        >
                            <div className="task-content flex-grow-1">
                                <div className="task-header d-flex align-items-center mb-2">
                                    <h5 className="mb-0">{task.task}</h5>
                                </div>
                                <div className="task-details">
                                    <div className="mb-2">{task.description}</div>
                                    <div className="d-flex align-items-center mt-3">
                                        <Badge 
                                            bg={getPriorityVariant(task.priority)}
                                            className="priority-badge"
                                        >
                                            {task.priority}
                                        </Badge>
                                        {task.dueDate && (
                                            <small className="text-muted ms-3">
                                                Due: {new Date(task.dueDate).toLocaleString()}
                                            </small>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="success"
                                size="sm"
                                className="complete-button ms-3"
                                onClick={() => handleComplete(task._id)}
                            >
                                Completed
                            </Button>
                        </ListGroup.Item>
                    ))
                ) : (
                    <ListGroup.Item className="text-center text-muted">
                        No tasks found
                    </ListGroup.Item>
                )}
            </ListGroup>
        </Container>
    );
};

export default TaskView;
