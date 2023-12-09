import React, { useState, useContext } from 'react';
import { InventoryContext } from '../InventoryContext';

function DisplayBooksUnderPricePage() {
    const [price, setPrice] = useState('');
    const { inventory } = useContext(InventoryContext);
    const [filteredBooks, setFilteredBooks] = useState([]);

    const handleSearch = () => {
        const results = inventory.filter(book => book.getAttribute('price') <= price);
        setFilteredBooks(results);
    };

    return (
        <div>
            <h2>Display Books Under a Certain Price</h2>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Enter Price"
            />
            <button onClick={handleSearch}>Search</button>

            <div className="book-list">
                {filteredBooks.map((book, index) => (
                    <div key={index} className="book-item">
                        <p><strong>Title:</strong> {book.getAttribute('title')}</p>
                        <p><strong>Author:</strong> {book.getAttribute('author')}</p>
                        <p><strong>ISBN:</strong> {book.getAttribute('isbn')}</p>
                        <p><strong>Price:</strong> {book.getAttribute('price')}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DisplayBooksUnderPricePage;
