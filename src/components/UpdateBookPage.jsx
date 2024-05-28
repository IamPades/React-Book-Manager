import React, { useState, useContext } from 'react';
import { InventoryContext } from '../InventoryContext';
import { Link, useNavigate } from 'react-router-dom';

// UpdateBookPage component for updating book details in the inventory
function UpdateBookPage() {
  const [selectedISBN, setSelectedISBN] = useState('');
  const [updatedBookDetails, setUpdatedBookDetails] = useState({ title: '', author: '', isbn: '', price: '' });
  const { inventory, setInventory, capacity } = useContext(InventoryContext);
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const navigate = useNavigate();
  const correctPassword = 'pargol';
  const maxAttempts = 3;

  const removeBook = (isbnToRemove) => {
    setInventory(inventory.filter(book => book.getAttribute('isbn') !== isbnToRemove));
  };

  const handleSelectBook = (e) => {
    const isbn = e.target.value;
    setSelectedISBN(isbn);
    const book = inventory.find(b => b.getAttribute('isbn') === isbn);
    if (book) {
      setUpdatedBookDetails({
        title: book.getAttribute('title'),
        author: book.getAttribute('author'),
        isbn: book.getAttribute('isbn'),
        price: book.getAttribute('price')
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBookDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInventory(inventory.map(book => {
      if (book.getAttribute('isbn') === selectedISBN) {
        book.setAttribute('title', updatedBookDetails.title);
        book.setAttribute('author', updatedBookDetails.author);
        book.setAttribute('isbn', updatedBookDetails.isbn);
        book.setAttribute('price', parseFloat(updatedBookDetails.price));
      }
      return book;
    }));
    setUpdateSuccess(true);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setAttemptCount(0);
    } else {
      const newAttemptCount = attemptCount + 1;
      setAttemptCount(newAttemptCount);
      if (newAttemptCount >= maxAttempts) {
        navigate('/main-menu');
      }
    }
  };

  const isInventoryEmpty = inventory.length === 0;

  return (
      <div style={{
        background: '#000', // Dark background for high contrast
        color: '#fff', // White text for readability and contrast
        minHeight: '100vh',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h2 style={{
          fontSize: '3rem', // Larger font size for heading
          fontWeight: '300', // Lighter font-weight for a modern look
          marginBottom: '50px'
        }}>Update Inventory</h2>
        <form onSubmit={handlePasswordSubmit} style={formStyle}>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
              style={inputStyle}
          />
          <button type="submit" style={buttonStyle}>Submit Password</button>
        </form>

        {password === correctPassword && !isInventoryEmpty && (
            <>
              <p style={infoStyle}>Inventory: {inventory.length} / {capacity}</p>
              <div style={inventoryOverviewStyle}>
                {inventory.map((book, index) => (
                    <div key={index} style={bookOverviewStyle}>
                      <p><strong>Title:</strong> {book.getAttribute('title')}</p>
                      <p><strong>Author:</strong> {book.getAttribute('author')}</p>
                      <p><strong>ISBN:</strong> {book.getAttribute('isbn')}</p>
                      <p><strong>Price:</strong> {book.getAttribute('price')}</p>
                      <button onClick={() => removeBook(book.getAttribute('isbn'))} style={buttonStyle}>Remove Book</button>
                    </div>
                ))}
              </div>

              <select onChange={handleSelectBook} value={selectedISBN} style={inputStyle}>
                <option value="">Select a Book</option>
                {inventory.map((book, index) => (
                    <option key={index} value={book.getAttribute('isbn')}>{book.getAttribute('title')}</option>
                ))}
              </select>

              <form onSubmit={handleSubmit} style={formStyle}>
                <input type="text" name="title" value={updatedBookDetails.title} onChange={handleChange} placeholder="Title" style={inputStyle} />
                <input type="text" name="author" value={updatedBookDetails.author} onChange={handleChange} placeholder="Author" style={inputStyle} />
                <input type="text" name="isbn" value={updatedBookDetails.isbn} onChange={handleChange} placeholder="ISBN" style={inputStyle} />
                <input type="number" name="price" value={updatedBookDetails.price} onChange={handleChange} placeholder="Price" style={inputStyle} />
                <button type="submit" style={buttonStyle}>Update Book</button>
              </form>

              {updateSuccess && <p style={successMessageStyle}>Book updated successfully!</p>}
            </>
        )}

        {isInventoryEmpty && <p style={infoStyle}>No books available in the inventory to update.</p>}

        <Link to="/main-menu" style={{ ...linkStyle, marginTop: '20px' }}>Back to Main Menu</Link>
      </div>
  );
}

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '30px'
};

const inputStyle = {
  width: '300px',
  padding: '10px',
  borderRadius: '5px',
  border: '2px solid #fff',
  backgroundColor: 'transparent',
  color: '#fff',
  fontSize: '1rem',
  marginBottom: '10px'
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: '2px solid #fff',
  backgroundColor: 'transparent',
  color: '#fff',
  fontSize: '1rem',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s'
};

const inventoryOverviewStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  marginBottom: '30px'
};

const bookOverviewStyle = {
  padding: '20px',
  border: '1px solid #fff',
  borderRadius: '10px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)'
};

const infoStyle = {
  fontSize: '1.2rem',
  marginBottom: '20px'
};

const successMessageStyle = {
  color: 'limegreen',
  fontSize: '1.2rem',
  marginTop: '20px'
};

const linkStyle = {
  display: 'inline-block',
  backgroundColor: 'transparent',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '5px',
  textDecoration: 'none',
  fontSize: '1.25rem',
  border: '2px solid #fff',
  fontWeight: 'bold',
  transition: 'background-color 0.3s, color 0.3s'
};

export default UpdateBookPage;