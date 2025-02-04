import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import '../CSS/Loginpage.css';

const Loginpage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/login', data); // Updated port number
            if (response.data.success) {
                console.log('Login successful');
                localStorage.setItem('token', response.data.token); // Store token
                navigate('/todolist'); 
            } else {
                setErrorMessage('Login failed');
            }
        } catch (error) {
            console.error('Error logging in:', error);
            setErrorMessage('Error logging in: ' + error.message);
        }
    };

    return (
        <Container>
            <h2>Login Page</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email && errors.email.message}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        {...register("password", { 
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message: "Password must have at least 6 characters"
                            }
                        })}
                        isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.password && errors.password.message}
                    </Form.Control.Feedback>
                </Form.Group>

                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <Button variant="primary" type="submit">Login</Button>
            </Form>

            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </Container>
    );
};

export default Loginpage;
