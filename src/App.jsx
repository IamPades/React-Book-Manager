// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import { InventoryProvider } from './InventoryContext';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import WelcomePage from './components/WelcomePage';
import SetupPage from './components/SetupPage';
import MainMenuPage from './components/MainMenuPage';
import NewBooksPage from './components/NewBooksPage';
import UpdateBookPage from './components/UpdateBookPage';
import DisplayBooksUnderPricePage from './components/DisplayBooksUnderPricePage';
import DisplayBooksByAuthorPage from './components/DisplayBooksByAuthorPage';
import QuitPage from './components/QuitPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <AuthProvider>
        <InventoryProvider>
          <Router>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/setup" element={<ProtectedRoute component={SetupPage} />} />
              <Route path="/main-menu" element={<ProtectedRoute component={MainMenuPage} />} />
              <Route path="/enter-books" element={<ProtectedRoute component={NewBooksPage} />} />
              <Route path="/update-book" element={<ProtectedRoute component={UpdateBookPage} />} />
              <Route path="/display-price" element={<ProtectedRoute component={DisplayBooksUnderPricePage} />} />
              <Route path="/display-author" element={<ProtectedRoute component={DisplayBooksByAuthorPage} />} />
              <Route path="/quit" element={<ProtectedRoute component={QuitPage} />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
            </Routes>
          </Router>
        </InventoryProvider>
      </AuthProvider>
  );
}

export default App;
