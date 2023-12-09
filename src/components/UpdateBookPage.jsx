import React, { useState, useContext } from 'react';
import { InventoryContext } from '../InventoryContext';
import { Link, useNavigate} from 'react-router-dom';

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
      <div>
        <h2>Update Inventory</h2>
        <form onSubmit={handlePasswordSubmit}>
          <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
          />
          <button type="submit">Submit Password</button>
        </form>

        {password === correctPassword && !isInventoryEmpty && (
            <>
              <p>Inventory: {inventory.length} / {capacity}</p>
              <div className="inventory-overview">
                {inventory.map((book, index) => (
                    <div key={index} className="book-overview">
                      <p><strong>Title:</strong> {book.getAttribute('title')}</p>
                      <p><strong>Author:</strong> {book.getAttribute('author')}</p>
                      <p><strong>ISBN:</strong> {book.getAttribute('isbn')}</p>
                      <p><strong>Price:</strong> {book.getAttribute('price')}</p>
                      <button onClick={() => removeBook(book.getAttribute('isbn'))}>Remove Book</button>
                    </div>
                ))}
              </div>

              <select onChange={handleSelectBook} value={selectedISBN}>
                <option value="">Select a Book</option>
                {inventory.map((book, index) => (
                    <option key={index} value={book.getAttribute('isbn')}>{book.getAttribute('title')}</option>
                ))}
              </select>

              <form onSubmit={handleSubmit}>
                <input type="text" name="title" value={updatedBookDetails.title} onChange={handleChange} placeholder="Title" />
                <input type="text" name="author" value={updatedBookDetails.author} onChange={handleChange} placeholder="Author" />
                <input type="text" name="isbn" value={updatedBookDetails.isbn} onChange={handleChange} placeholder="ISBN" />
                <input type="number" name="price" value={updatedBookDetails.price} onChange={handleChange} placeholder="Price" />
                <button type="submit">Update Book</button>
              </form>

              {updateSuccess && <p>Book updated successfully!</p>}
            </>
        )}

        {isInventoryEmpty && <p>No books available in the inventory to update.</p>}

        <Link to="/main-menu" className="back-link">Back to Main Menu</Link>
      </div>
  );
}

export default UpdateBookPage;
