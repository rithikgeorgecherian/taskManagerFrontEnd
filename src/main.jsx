import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthProvider>
      <TaskProvider>
        <App />
      </TaskProvider>
    </AuthProvider>
  </React.StrictMode>
);
