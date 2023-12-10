import React from 'react';
import { Link } from 'react-router-dom';

// WelcomePage component for the landing page of the Bookstore Manager application
function WelcomePage() {
    // Render method returns the JSX for the component
    return (
        <div className="welcome-container">
            <h1>Welcome to the Bookstore Manager</h1>
            <Link to="/setup" className="setup-link">Start Managing Your Inventory</Link>
        </div>
    );
}

// Exporting the component for use in other parts of the application
export default WelcomePage;
