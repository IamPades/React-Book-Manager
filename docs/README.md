# Bookstore

## Overview

The Bookstore Manager is a React-based web application designed to manage a bookstore's inventory. It provides an intuitive user interface for adding, updating, removing, and viewing books. The application is built with React and utilizes Vite for an optimized development experience.

## Features

- **Welcome Page**: A landing page that welcomes users and directs them to the setup page.
- **Setup Page**: Allows users to set the maximum capacity of the bookstore inventory.
- **Main Menu**: Offers options to manage books, including adding new books, updating existing ones, displaying books by author or price, and quitting the application.
- **Inventory Management**: Users can add, update, or remove books from the inventory, with each book having attributes like title, author, ISBN, and price.
- **Display Books by Author**: Users can search and display books by a specific author.
- **Display Books Under Price**: Users can search and display books under a specific price.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across various devices.

## Getting Started

To get started with the Bookstore Manager:

1. **Clone the repository:**
   ```bash
   git clone <repository_url>
   ```
2. **Navigate to the project directory and install dependencies:**
   ```bash
   cd bookstore-manager
   npm install
   ```
3. **Run the application:**
   ```bash
   npm run dev
   ```
4**Run the server.js:**
   ```bash
   npm  run start-backend
5. **Open your browser and go to the provided localhost URL:**
   ```plaintext
   http://localhost:4002
   ```

## Technologies

- **React**: For building the user interface.
- **Vite**: As a build tool for faster development and optimization.
- **React Router**: For managing navigation between pages.
- **Express**: For backend API management.
- **SQLite3**: For database management.
- **Axios**: For making HTTP requests.
- **dotenv**: For environment variable management.
- **bcryptjs**: For password hashing.
- **jsonwebtoken**: For token-based authentication.
- **cors**: For handling Cross-Origin Resource Sharing.
- **body-parser**: For parsing incoming request bodies.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Lints the code for any issues.
- `npm run preview`: Previews the built application.
- `npm run start-backend`: Starts the backend server.

## Project Structure

```plaintext
├── backend
│   └── server.js           # Backend server code
├── public
│   └── index.html          # HTML template
├── src
│   ├── components
│   │   ├── DisplayBooksByAuthorPage.jsx
│   │   ├── DisplayBooksUnderPricePage.jsx
│   │   ├── LoginForm.jsx

│   │   ├── MainMenuPage.jsx
│   │   ├── NewBooksPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   ├── QuitPage.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── SetupPage.jsx
│   │   ├── UpdateBookPage.jsx
│   │   └── WelcomePage.jsx
│   ├── contexts
│   │   ├── AuthContext.jsx
│   │   └── InventoryContext.jsx
│   ├── App.jsx              # Main App component
│   ├── Book.js              # Book class model
│   ├── index.js             # Entry point
│   └── styles
│       ├── LoginForm.css    # CSS for LoginForm
│       └── ...              # Other CSS files
├── .env                     # Environment variables
├── .gitignore               # Git ignore file
├── package.json             # Package configuration
├── package-lock.json        # Package lock file
└── vite.config.js           # Vite configuration
```

## Detailed Component Breakdown

### WelcomePage.jsx

The landing page that welcomes users and directs them to the setup page. It features a welcoming message and a button to start managing the bookstore inventory.

### SetupPage.jsx

Allows users to set the maximum capacity of the bookstore inventory. It includes input fields for setting capacity and navigation links.

### MainMenuPage.jsx

Provides navigation links to various sections of the application, including options to add new books, update existing ones, display books by author or price, and quit the application.

### NewBooksPage.jsx

A form for adding new books to the inventory. It includes fields for the book's title, author, ISBN, and price. The user must enter a password to access this page.

### UpdateBookPage.jsx

Allows users to update the details of existing books in the inventory. Users must select a book from a list and update its details.

### DisplayBooksByAuthorPage.jsx

Allows users to search for books by a specific author. It includes an input field for the author's name and displays a list of matching books.

### DisplayBooksUnderPricePage.jsx

Allows users to search for books under a specific price. It includes an input field for the price and displays a list of matching books.

### QuitPage.jsx

A simple exit page that thanks the user for using the Bookstore Manager and provides a link to return to the main menu.

### AuthContext.jsx

Provides authentication context to manage user login state and token management.

### InventoryContext.jsx

Provides inventory context to manage the bookstore's inventory state, including adding, updating, and removing books.


