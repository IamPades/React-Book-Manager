import React, { useState, useContext } from 'react';
import { InventoryContext } from '../InventoryContext';

function UpdateBookPage() {
  const [selectedISBN, setSelectedISBN] = useState('');
  const [updatedBookDetails, setUpdatedBookDetails] = useState({ title: '', author: '', isbn: '', price: '' });
  const { inventory, setInventory } = useContext(InventoryContext);

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
    setUpdatedBookDetails(prevDetails => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInventory(inventory.map(book => {
      if (book.getAttribute('isbn') === selectedISBN) {
        book.setAttribute('title', updatedBookDetails.title);
        book.setAttribute('author', updatedBookDetails.author);
        book.setAttribute('price', parseFloat(updatedBookDetails.price));
      }
      return book;
    }));
  };

  return (
    <div>
      <h2>Update Book Information</h2>
      <select onChange={handleSelectBook} value={selectedISBN}>
        {inventory.map((book, index) => (
          <option key={index} value={book.getAttribute('isbn')}>{book.getAttribute('title')}</option>
        ))}
      </select>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="title" 
          value={updatedBookDetails.title} 
          onChange={handleChange} 
          placeholder="Title" 
        />
        <input 
          type="text" 
          name="author" 
          value={updatedBookDetails.author} 
          onChange={handleChange} 
          placeholder="Author" 
        />
        <input 
          type="number" 
          name="price" 
          value={updatedBookDetails.price} 
          onChange={handleChange} 
          placeholder="Price" 
        />
        <button type="submit">Update Book</button>
      </form>
    </div>
  );
}

export default UpdateBookPage;
