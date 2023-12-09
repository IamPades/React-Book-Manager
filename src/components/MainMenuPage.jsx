import React from 'react';
import { Link } from 'react-router-dom';

function MainMenuPage() {
    return (
        <div className="main-menu">
            <h2>Main Menu</h2>
            <div>
                <Link to="/enter-books" className="main-menu-link">Enter New Books</Link>
                <Link to="/update-book" className="main-menu-link">Change Book Information</Link>
                <Link to="/display-author" className="main-menu-link">Display Books by Author</Link>
                <Link to="/display-price" className="main-menu-link">Display Books Under a Certain Price</Link>
                <Link to="/quit" className="main-menu-link">Quit</Link>
            </div>
        </div>
    );
}

export default MainMenuPage;
