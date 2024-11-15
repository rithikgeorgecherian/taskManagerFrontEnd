// src/services/commonAPI.js

import axios from 'axios';
import serverUrl from './serverURL';

const apiClient = axios.create({
    baseURL: serverUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add the token to the request header if the user is authenticated
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        if (token) {
            config.headers['x-auth-token'] = token;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Handle API response and errors
const handleResponse = async (promise) => {
    try {
        const response = await promise;
        return { data: response.data, error: null };
    } catch (error) {
        console.error('API error:', error);
        return { data: null, error: error.response ? error.response.data : 'An error occurred' };
    }
};

// GET request
const get = async (url) => {
    return handleResponse(apiClient.get(url));
};

// POST request
const post = async (url, body) => {
    return handleResponse(apiClient.post(url, body));
};

// PUT request
const put = async (url, body) => {
    return handleResponse(apiClient.put(url, body));
};

// DELETE request
const del = async (url) => {
    return handleResponse(apiClient.delete(url));
};

export { get, post, put, del };
