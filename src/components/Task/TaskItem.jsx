import React from 'react';
import { Card, ProgressBar, Button } from 'react-bootstrap';

function TaskItem({ task }) {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>{task.title}</Card.Title>
                <Card.Text>{task.description}</Card.Text>
                <Card.Text><strong>Start Date:</strong> {task.startDate}</Card.Text>
                <Card.Text><strong>End Date:</strong> {task.endDate}</Card.Text>
                <Card.Text><strong>Status:</strong> {task.status}</Card.Text>
                <ProgressBar now={task.progress} label={`${task.progress}%`} />
                <Button variant="warning" className="mt-2">Edit</Button>{' '}
                <Button variant="danger" className="mt-2">Delete</Button>
            </Card.Body>
        </Card>
    );
}

export default TaskItem;
