import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  return (
    <div>
      <h1>Welcome to the Bookstore Manager</h1>
      <Link to="/setup">Go to Setup</Link>
    </div>
  );
}

export default WelcomePage;
