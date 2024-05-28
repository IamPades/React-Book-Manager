// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('token') || null);
    const navigate = useNavigate();

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:4001/login', { username, password });
            if (response.data.auth) {
                setAuthToken(response.data.token);
                localStorage.setItem('token', response.data.token);
                navigate('/main-menu');  // Redirect to the main menu upon successful login
            } else {
                throw new Error('Authentication failed');
            }
        } catch (error) {
            throw error;
        }
    };

    const logout = () => {
        setAuthToken(null);
        localStorage.removeItem('token');
        navigate('/login');  // Redirect to the login page upon logout
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuthToken(token);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ authToken, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};