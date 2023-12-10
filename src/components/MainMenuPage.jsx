import React from 'react';
import { Link } from 'react-router-dom';

// MainMenuPage component for the main navigation menu
function MainMenuPage() {
    // Render method returns the JSX for the component
    return (
        <div className="main-menu">
            <h2>Main Menu</h2>
            <div>
                <Link to="/" className="main-menu-link">Welcome Page</Link>
                <Link to="/enter-books" className="main-menu-link">Enter New Books (Admin)</Link>
                <Link to="/update-book" className="main-menu-link"> Change information of a book (Admin)</Link>
                <Link to="/display-author" className="main-menu-link">Display all books by a specific author</Link>
                <Link to="/display-price" className="main-menu-link"> Display all books under a certain a price</Link>
                <Link to="/quit" className="main-menu-link">Quit</Link>
                <Link to="/setup" className="back-link">Back to Setup</Link>
            </div>

        </div>
    );
}

// Exporting the component for use in other parts of the application
export default MainMenuPage;
