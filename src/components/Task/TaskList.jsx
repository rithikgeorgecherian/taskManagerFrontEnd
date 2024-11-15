import React, { useContext, useState } from 'react';
import { TaskContext } from '../../context/TaskContext';
import TaskItem from './TaskItem';
import { Pagination } from 'react-bootstrap';

function TaskList() {
    const { tasks } = useContext(TaskContext);
    const [currentPage, setCurrentPage] = useState(1);
    const tasksPerPage = 5;

    // Calculate the index of the last task on the current page
    const lastIndex = currentPage * tasksPerPage;
    // Calculate the index of the first task on the current page
    const firstIndex = lastIndex - tasksPerPage;

    const currentTasks = tasks.slice(firstIndex, lastIndex);

    const totalPages = Math.ceil(tasks.length / tasksPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div>
            {currentTasks.map(task => (
                <TaskItem key={task.id} task={task} />
            ))}
            
            <Pagination>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Pagination.Item
                        key={index + 1}
                        active={currentPage === index + 1}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index + 1}
                    </Pagination.Item>
                ))}
            </Pagination>
        </div>
    );
}

export default TaskList;
