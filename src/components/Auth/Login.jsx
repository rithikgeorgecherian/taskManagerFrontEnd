import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [form, setForm] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form.username);
        navigate('/tasks');
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
                Login
            </Button>
        </Form>
    );
}

export default Login;
