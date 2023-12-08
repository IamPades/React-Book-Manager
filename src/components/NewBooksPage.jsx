import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { InventoryContext } from '../InventoryContext'; 
import Book from '../Book'; 

function NewBooksPage() {
  const [password, setPassword] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [bookDetails, setBookDetails] = useState({ title: '', author: '', isbn: '', price: '' });
  const { inventory, setInventory } = useContext(InventoryContext);
  const navigate = useNavigate();
  const maxAttempts = 3;
  const correctPassword = 'pargol';

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      // Correct password
    } else {
      setAttemptCount(prev => prev + 1);
      if (attemptCount >= maxAttempts) {
        navigate('/main-menu');
      }
    }
  };

  const handleBookDetailsChange = (e) => {
    const { name, value } = e.target;
    setBookDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    // Assuming the inventory has a capacity limit
    if (inventory.length < inventory.capacity) {
      const newBook = new Book(bookDetails.title, bookDetails.author, bookDetails.isbn, parseFloat(bookDetails.price));
      setInventory(prevInventory => [...prevInventory, newBook]);
      setBookDetails({ title: '', author: '', isbn: '', price: '' });
    } else {
      // Handle 'inventory full' case
    }
  };

  return (
    <div>
      <h2>Enter New Books</h2>
      {attemptCount < maxAttempts ? (
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter Password"
          />
          <button type="submit">Submit Password</button>
        </form>
      ) : (
        <p>Maximum password attempts reached. Please return to the main menu.</p>
      )}
      
      {password === correctPassword && (
        <form onSubmit={handleBookSubmit}>
          <input
            type="text"
            name="title"
            value={bookDetails.title}
            onChange={handleBookDetailsChange}
            placeholder="Book Title"
          />
          <input
            type="text"
            name="author"
            value={bookDetails.author}
            onChange={handleBookDetailsChange}
            placeholder="Author"
          />
          <input
            type="text"
            name="isbn"
            value={bookDetails.isbn}
            onChange={handleBookDetailsChange}
            placeholder="ISBN"
          />
          <input
            type="number"
            name="price"
            value={bookDetails.price}
            onChange={handleBookDetailsChange}
            placeholder="Price"
          />
          <button type="submit">Add Book</button>
        </form>
      )}
    </div>
  );
}

export default NewBooksPage;
