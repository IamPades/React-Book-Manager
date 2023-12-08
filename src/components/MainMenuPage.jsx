import React from 'react';
import { Link } from 'react-router-dom';

function MainMenuPage() {
  return (
    <div>
      <h2>Main Menu</h2>
      <div>
        <Link to="/enter-books">Enter New Books</Link>
        <Link to="/update-book">Change Book Information</Link>
        <Link to="/display-author">Display Books by Author</Link>
        <Link to="/display-price">Display Books Under a Certain Price</Link>
        <Link to="/quit">Quit</Link>
      </div>
    </div>
  );
}

export default MainMenuPage;
