import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InventoryContext } from '../InventoryContext';
import Book from '../Book';

// NewBooksPage component for adding new books to the inventory
function NewBooksPage() {
  const [password, setPassword] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [bookDetails, setBookDetails] = useState({ title: '', author: '', isbn: '', price: '' });
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();
  const correctPassword = 'pargol';
  const maxAttempts = 3;
  const { inventory, setInventory, capacity } = useContext(InventoryContext);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsBookAdded(false);
      setPasswordError('');
    } else {
      setAttemptCount(attemptCount + 1);
      setPasswordError('Incorrect password, try again.');
      if (attemptCount + 1 >= maxAttempts) {
        navigate('/main-menu');
      }
    }
  };

  const handleBookDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    if (inventory.length < capacity) {
      const newBook = new Book(bookDetails.title, bookDetails.author, bookDetails.isbn, parseFloat(bookDetails.price));
      setInventory(prevInventory => [...prevInventory, newBook]);
      setIsBookAdded(true);
      setBookDetails({ title: '', author: '', isbn: '', price: '' });
    } else {
      alert("Inventory is full. Cannot add more books.");
    }
  };

  return (
      <div style={containerStyle}>
        <h2 style={headingStyle}>Enter New Books</h2>
        {attemptCount < maxAttempts ? (
            <form onSubmit={handlePasswordSubmit} style={formStyle}>
              <input
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Submit Password</button>
              {passwordError && <p style={errorStyle}>{passwordError}</p>}
            </form>
        ) : (
            <p style={errorStyle}>Maximum password attempts reached. Return to <Link to="/main-menu" style={linkStyle}>Main Menu</Link>.</p>
        )}

        {password === correctPassword && (
            <form onSubmit={handleBookSubmit} style={formStyle}>
              <input
                  type="text"
                  name="title"
                  value={bookDetails.title}
                  onChange={handleBookDetailsChange}
                  placeholder="Book Title"
                  style={inputStyle}
              />
              <input
                  type="text"
                  name="author"
                  value={bookDetails.author}
                  onChange={handleBookDetailsChange}
                  placeholder="Author"
                  style={inputStyle}
              />
              <input
                  type="text"
                  name="isbn"
                  value={bookDetails.isbn}
                  onChange={handleBookDetailsChange}
                  placeholder="ISBN"
                  style={inputStyle}
              />
              <input
                  type="number"
                  name="price"
                  value={bookDetails.price}
                  onChange={handleBookDetailsChange}
                  placeholder="Price"
                  style={inputStyle}
              />
              <button type="submit" style={buttonStyle}>Add Book</button>
            </form>
        )}

        {isBookAdded && <p style={successMessageStyle}>Book added successfully!</p>}
        <p style={infoStyle}>Books in Inventory: {inventory.length} / {capacity}</p>
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

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '15px',
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
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#333',
  color: '#fff',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
};

const errorStyle = {
  color: 'red',
  fontSize: '1rem',
};

const successMessageStyle = {
  color: 'limegreen',
  fontSize: '1.2rem',
  marginTop: '20px',
};

const infoStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px',
};

const linkStyle = {
  color: '#333',
  textDecoration: 'none',
  fontSize: '1rem',
  border: '1px solid #333',
  padding: '10px 20px',
  borderRadius: '5px',
  transition: 'background-color 0.3s, color 0.3s',
};

linkStyle[':hover'] = {
  backgroundColor: '#333',
  color: '#fff',
};

export default NewBooksPage;
