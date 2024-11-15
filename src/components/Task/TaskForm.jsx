import React, { useState, useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import { TaskContext } from '../../context/TaskContext';

function TaskForm() {
    const { addTask } = useContext(TaskContext);
    const [form, setForm] = useState({
        id: Date.now(),
        title: '',
        description: '',
        startDate: '',
        endDate: '',
        status: 'Pending',
        progress: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(form);
        setForm({ id: Date.now(), title: '', description: '', startDate: '', endDate: '', status: 'Pending', progress: 0 });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formEndDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Button type="submit" variant="primary">Add Task</Button>
        </Form>
    );
}

export default TaskForm;
