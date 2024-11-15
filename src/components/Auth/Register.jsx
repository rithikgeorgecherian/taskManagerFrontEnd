import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Register() {
    const [form, setForm] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Registered successfully!');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
        </Form>
    );
}

export default Register;
