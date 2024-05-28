import React from 'react';
import { Link } from 'react-router-dom';

// Displays Navigation Links to other components with a premium minimalist design
function MainMenuPage() {
    // Render MainMenuPage's JSX with a refined minimalist styling
    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Main Menu</h2>
            <div style={linksContainerStyle}>
                {menuLinks.map(({ to, label }) => (
                    <Link to={to} style={linkStyle} key={label}>
                        {label}
                    </Link>
                ))}
            </div>
        </div>
    );
}

const menuLinks = [
    { to: "/", label: "Welcome Page" },
    { to: "/enter-books", label: "Enter New Books (Admin)" },
    { to: "/update-book", label: "Change Information of a Book (Admin)" },
    { to: "/display-author", label: "Display All Books by a Specific Author" },
    { to: "/display-price", label: "Display All Books Under a Certain Price" },
    { to: "/quit", label: "Quit" },
    { to: "/setup", label: "Back to Setup" }
];

const containerStyle = {
    background: '#f4f4f4', // Light background for a cleaner look
    color: '#333', // Dark text for better readability
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px',
    fontFamily: "'Helvetica Neue', Arial, sans-serif", // Clean font
};

const headingStyle = {
    fontSize: '2.5rem', // Large font size for heading
    fontWeight: '300', // Light font weight for a modern look
    marginBottom: '30px',
};

const linksContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px', // More consistent spacing
};

const linkStyle = {
    display: 'inline-block',
    backgroundColor: '#fff', // White background for links
    color: '#333', // Dark text color for links
    padding: '10px 20px',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '1.25rem', // Increased font size for links
    border: '2px solid #333', // Dark border for a refined look
    fontWeight: 'bold',
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition for hover effects
};

linkStyle[':hover'] = {
    backgroundColor: '#333',
    color: '#fff',
};

export default MainMenuPage;
