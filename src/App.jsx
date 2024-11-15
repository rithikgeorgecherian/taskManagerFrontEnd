import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import TaskList from './components/Task/TaskList';
import TaskForm from './components/Task/TaskForm';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';

function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <Router> {/* Only one Router component at the top level */}
                    <Navbar />
                    <div className="container mt-5">
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/tasks" element={<TaskList />} />
                            <Route path="/tasks/add" element={<TaskForm />} />
                            <Route path="/login" element={<Login />} />
                            {/* You can add more routes here */}
                        </Routes>
                    </div>
                </Router>
            </TaskProvider>
        </AuthProvider>
    );
}

export default App;

