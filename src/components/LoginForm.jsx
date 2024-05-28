import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'; // Make sure this CSS file is correctly linked

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);  // This function should handle setting the auth token
            navigate('/main-menu');  // Redirect to a protected route after login
        } catch (error) {
            setError('Invalid credentials or server error. Please try again.');
        }
    };

    return (
        <div className="login-container" style={{ backgroundImage: 'url("https://example.com/library-background.jpg")', backgroundSize: 'cover' }}>
            <form className="login-form" onSubmit={handleSubmit}>
                <h2 style={{ color: '#5d4037' }}>Log In to Your Account</h2>
                {error && <p className="error-message">{error}</p>}
                <div className="form-group">
                    <label htmlFor="username" style={{ color: '#795548' }}>Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)' }}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password" style={{ color: '#795548' }}>Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)' }}
                    />
                </div>
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
