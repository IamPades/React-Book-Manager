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
      <Router>
        <AuthProvider>
          <InventoryProvider>
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/register" element={<RegisterForm />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/setup" element={<SetupPage />} />
                <Route path="/main-menu" element={<MainMenuPage />} />
                <Route path="/enter-books" element={<NewBooksPage />} />
                <Route path="/update-book" element={<UpdateBookPage />} />
                <Route path="/display-price" element={<DisplayBooksUnderPricePage />} />
                <Route path="/display-author" element={<DisplayBooksByAuthorPage />} />
                <Route path="/quit" element={<QuitPage />} />
              </Route>
            </Routes>
          </InventoryProvider>
        </AuthProvider>
      </Router>
  );
}

export default App;
