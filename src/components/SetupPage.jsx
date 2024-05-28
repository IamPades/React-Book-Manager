import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InventoryContext } from '../InventoryContext';

// SetupPage's Logic to handle Inventory Capacity
function SetupPage() {
    const { setInventory, setCapacity, capacity } = useContext(InventoryContext);
    const [maxBooksLocal, setMaxBooksLocal] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (maxBooksLocal > 0) {
            setCapacity(maxBooksLocal);
            setInventory([]); // Inventory is reset when Capacity is changed
            alert('Inventory capacity set to ' + maxBooksLocal + ' books.');
            navigate('/main-menu');
        } else {
            alert('Please enter a positive number for the inventory.');
        }
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Setup Bookstore</h2>
            <input
                type="number"
                value={maxBooksLocal}
                onChange={(e) => setMaxBooksLocal(parseInt(e.target.value, 10))}
                placeholder="Enter Capacity"
                style={inputStyle}
            />
            <button onClick={handleSubmit} style={buttonStyle}>Set Inventory</button>
            {capacity > 0 && <p style={infoStyle}>Current Capacity: {capacity}</p>}
            <Link to="/main-menu" style={linkStyle}>Back to Main Menu</Link>
        </div>
    );
}

const containerStyle = {
    background: '#f7f7f7', // Soft background color
    color: '#1c1c1c', // Darker text color for better contrast
    minHeight: '100vh',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Helvetica Neue', Arial, sans-serif", // Clean font
};

const headingStyle = {
    fontSize: '2.5rem', // Large font size for heading
    fontWeight: '300', // Light font weight
    marginBottom: '30px',
    color: '#1c1c1c' // Darker text color for heading
};

const inputStyle = {
    width: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#1c1c1c' // Darker text color for input
};

const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    marginBottom: '20px',
};

const infoStyle = {
    fontSize: '1.2rem',
    marginBottom: '20px',
    color: '#1c1c1c' // Darker text color for info
};

const linkStyle = {
    color: '#1c1c1c',
    textDecoration: 'none',
    fontSize: '1rem',
    border: '1px solid #1c1c1c',
    padding: '10px 20px',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s',
};

linkStyle[':hover'] = {
    backgroundColor: '#1c1c1c',
    color: '#fff',
};

export default SetupPage;
