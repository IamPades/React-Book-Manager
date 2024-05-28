import React, { useState, useContext } from 'react';
import { InventoryContext } from '../InventoryContext';
import { Link } from 'react-router-dom';

// DisplayBooksUnderPricePage component to display books under a certain price
function DisplayBooksUnderPricePage() {
    const [price, setPrice] = useState('');
    const { inventory } = useContext(InventoryContext);
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = () => {
        const results = inventory.filter(book => book.getAttribute('price') < price);
        setFilteredBooks(results);
    };

    return (
        <div style={containerStyle}>
            <h2 style={headingStyle}>Display Books Under a Certain Price</h2>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
                style={inputStyle}
            />
            <button onClick={handleSearch} style={buttonStyle}>Search</button>

            <div style={bookListStyle}>
                {filteredBooks.map((book, index) => (
                    <div key={index} style={bookItemStyle}>
                        <p><strong>Title:</strong> {book.getAttribute('title')}</p>
                        <p><strong>Author:</strong> {book.getAttribute('author')}</p>
                        <p><strong>ISBN:</strong> {book.getAttribute('isbn')}</p>
                        <p><strong>Price:</strong> {book.getAttribute('price')}</p>
                    </div>
                ))}
            </div>
            <Link to="/main-menu" style={linkStyle}>Back to Main Menu</Link>
        </div>
    );
}

const containerStyle = {
    background: '#f7f7f7', // Light background for a cozy look
    color: '#333', // Dark text for readability
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
    marginBottom: '30px',
};

const inputStyle = {
    width: '300px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#fff',
    color: '#333',
    fontSize: '1rem',
    marginBottom: '20px',
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
    transition: 'background-color 0.3s, color 0.3s',
};

const bookListStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
};

const bookItemStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
    color: '#333',
};

const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '1rem',
    border: '1px solid #333',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '20px',
    transition: 'background-color 0.3s, color 0.3s',
};

linkStyle[':hover'] = {
    backgroundColor: '#333',
    color: '#fff',
};

export default DisplayBooksUnderPricePage;
