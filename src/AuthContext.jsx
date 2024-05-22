// src/AuthContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, isAuthenticated: false });

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth({ token, isAuthenticated: true });
            axios.defaults.headers.common['x-access-token'] = token;  // Set token in axios headers
        }
    }, []);

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:4001/login', { username, password });
            const token = response.data.token;
            setAuth({ token, isAuthenticated: true });
            localStorage.setItem('token', token);  // Store token in local storage
            axios.defaults.headers.common['x-access-token'] = token;  // Set token in axios headers
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    const register = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:4001/register', { username, password });
            const token = response.data.token;
            setAuth({ token, isAuthenticated: true });
            localStorage.setItem('token', token);  // Store token in local storage
            axios.defaults.headers.common['x-access-token'] = token;  // Set token in axios headers
        } catch (error) {
            console.error("Registration failed", error);
        }
    };

    const logout = () => {
        setAuth({ token: null, isAuthenticated: false });
        localStorage.removeItem('token');  // Remove token from local storage
        delete axios.defaults.headers.common['x-access-token'];  // Remove token from axios headers
    };

    return (
        <AuthContext.Provider value={{ auth, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
