import { get, post, put, del } from './commonAPI';

// AUTHENTICATION API
const registerUser = async (userData) => {
    const url = '/api/auth/register';
    return await post(url, userData);
};

const loginUser = async (userData) => {
    const url = '/api/auth/login';
    return await post(url, userData);
};

// TASK API
const createTask = async (taskData) => {
    const url = '/api/tasks';
    return await post(url, taskData);
};

const getTasks = async () => {
    const url = '/api/tasks';
    return await get(url);
};

const updateTask = async (taskId, taskData) => {
    const url = `/api/tasks/${taskId}`;
    return await put(url, taskData);
};

const deleteTask = async (taskId) => {
    const url = `/api/tasks/${taskId}`;
    return await del(url);
};

// Reminder functionality can be added to tasks (e.g., sending email notifications, etc.)
// You may integrate a specific reminder service or logic in the backend, depending on your requirements.

export { registerUser, loginUser, createTask, getTasks, updateTask, deleteTask };
