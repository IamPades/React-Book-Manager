import React from 'react';
import { Link } from 'react-router-dom';

// Landing page of Bookstore
function WelcomePage() {
    // Render WelcomePage's JSX
    return (
        <div className="welcome-container">
            <h1>Welcome to the Bookstore Manager</h1>
            <Link to="/setup" className="setup-link">Start Managing Your Inventory</Link>
        </div>
    );
}

export default WelcomePage;
