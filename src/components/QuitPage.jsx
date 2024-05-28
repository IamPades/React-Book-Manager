import React from 'react';

// Bookstore's Exit Page
function QuitPage() {
    // Render QuitPage's JSX
    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Thank You for Using the Bookstore Manager</h2>
            <p style={paragraphStyle}>We hope to see you again soon!</p>
        </div>
    );
}

const containerStyle = {
    background: '#000', // Dark background for high contrast
    color: '#fff', // White text for readability and contrast
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
    fontWeight: '300', // Light font weight
    marginBottom: '20px',
};

const paragraphStyle = {
    fontSize: '1.2rem', // Slightly larger font for paragraph
    fontWeight: '300', // Light font weight for a modern look
};

export default QuitPage;
