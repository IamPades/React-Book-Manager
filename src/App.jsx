import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./InventoryContext";
import WelcomePage from "./components/WelcomePage";
import SetupPage from "./components/SetupPage";
import MainMenuPage from "./components/MainMenuPage";
import NewBooksPage from "./components/NewBooksPage";
import UpdateBookPage from "./components/UpdateBookPage";
import DisplayBooksUnderPricePage from "./components/DisplayBooksUnderPricePage";
import DisplayBooksByAuthorPage from "./components/DisplayBooksByAuthorPage";
import QuitPage from "./components/QuitPage";

function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/main-menu" element={<MainMenuPage />} />
          <Route path="/enter-books" element={<NewBooksPage />} />
          <Route path="/update-book" element={<UpdateBookPage />} />
          <Route path="/display-price" element={<DisplayBooksUnderPricePage />} />
          <Route path="/display-author" element={<DisplayBooksByAuthorPage />} />
          <Route path="/quit" element={<QuitPage />} />
        </Routes>
      </BrowserRouter>
    </InventoryProvider>
  );
}

export default App;
