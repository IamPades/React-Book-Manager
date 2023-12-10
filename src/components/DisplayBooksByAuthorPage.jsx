import React, { useState, useContext } from 'react';
import { InventoryContext } from '../InventoryContext';
import { Link } from 'react-router-dom';

// Component for displaying books filtered by author
function DisplayBooksByAuthorPage() {
    // State hook for managing author input
    const [author, setAuthor] = useState('');
    // Accessing inventory data from context
    const { inventory } = useContext(InventoryContext);
    // State hook for managing the filtered list of books
    const [filteredBooks, setFilteredBooks] = useState([]);

    // Function to handle search and filter books by author
    const handleSearch = () => {
        // Filtering books where the author matches the input, case-insensitive
        const results = inventory.filter(book => book.getAttribute('author').toLowerCase() === author.toLowerCase());
        // Updating the state with the filtered results
        setFilteredBooks(results);
    };

    // Render method returns the JSX for the component
    return (
        <div>
            <h2>Display Books by Author</h2>
            <input
                type="text"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                placeholder="Enter Author's Name"
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
            <Link to="/main-menu" className="back-link">Back to Main Menu</Link>
        </div>
    );
}

// Exporting the component for use in other parts of the application
export default DisplayBooksByAuthorPage;
