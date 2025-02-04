import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import '../CSS/Register.css';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3001/register', data);
            if (response.data.success) {
                console.log('Registration successful');
                navigate('/login'); // Redirect to login page after successful registration
            } else {
                setErrorMessage('Registration failed');
            }
        } catch (error) {
            console.error('Error registering:', error);
            setErrorMessage('Error registering: ' + error.message);
        }
    };

    return (
        <Container>
            <h2>Register Page</h2>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.name && errors.name.message}
                    </Form.Control.Feedback>
                </Form.Group>

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

                <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        {...register("confirmPassword", {
                            required: "Confirm Password is required",
                            validate: value =>
                                value === watch('password') || "Passwords do not match"
                        })}
                        isInvalid={!!errors.confirmPassword}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.confirmPassword && errors.confirmPassword.message}
                    </Form.Control.Feedback>
                </Form.Group>

                {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}

                <Button variant="primary" type="submit">Register</Button>
            </Form>
        </Container>
    );
};

export default Register;
