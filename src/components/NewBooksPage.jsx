import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { InventoryContext } from '../InventoryContext';
import Book from '../Book';

function NewBooksPage() {
  const [password, setPassword] = useState('');
  const [attemptCount, setAttemptCount] = useState(0);
  const [bookDetails, setBookDetails] = useState({ title: '', author: '', isbn: '', price: '' });
  const [isBookAdded, setIsBookAdded] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { inventory, setInventory } = useContext(InventoryContext);
  const navigate = useNavigate();
  const correctPassword = 'pargol';
  const maxAttempts = 3;

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsBookAdded(false);
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password, try again.');
      setAttemptCount(attemptCount + 1);
      if (attemptCount >= maxAttempts) {
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
    const newBook = new Book(bookDetails.title, bookDetails.author, bookDetails.isbn, parseFloat(bookDetails.price));
    setInventory(prevInventory => [...prevInventory, newBook]);
    setIsBookAdded(true);
    setBookDetails({ title: '', author: '', isbn: '', price: '' }); // Reset form
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
              {passwordError && <p>{passwordError}</p>}
            </form>
        ) : (
            <p>Maximum password attempts reached. Return to <Link to="/main-menu">Main Menu</Link>.</p>
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

        {isBookAdded && <p>Book added successfully!</p>}
      </div>
  );
}

export default NewBooksPage;
