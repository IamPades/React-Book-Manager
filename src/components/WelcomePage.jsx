import React from 'react';
import { Link } from 'react-router-dom';

// Landing page of Bookstore
function WelcomePage() {
    return (
        <div className="welcome-container" style={{
            backgroundImage: 'url("https://i.imghippo.com/files/6wnrn1716931393.jpg")',
            backgroundSize: 'cover',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white'
        }}>
            <div style={{
                padding: '20px',
                backgroundColor: 'rgba(0,0,0,0.5)',
                maxWidth: '600px',
                textAlign: 'center',
                borderRadius: '10px'
            }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>Welcome to Our Cozy Bookstore</h1>
                <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>Browse, explore, and manage your love for books.</p>
                <Link to="/setup" className="setup-link" style={{
                    marginTop: '20px',
                    display: 'inline-block',
                    backgroundColor: '#f8f8f8',
                    color: '#333',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}>
                    Start Managing Your Inventory
                </Link>
            </div>
        </div>
    );
}

export default WelcomePage;
