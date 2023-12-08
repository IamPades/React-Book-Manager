import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SetupPage from "./components/SetupPage";
import MainMenuPage from "./components/MainMenuPage";
import { InventoryProvider } from "./InventoryContext";
import NewBooksPage from "./components/NewBooksPage";

function App() {
  return (
    <InventoryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/main-menu" element={<MainMenuPage />} />
          <Route path="/enter-books" element={<NewBooksPage />} />
          {/* Add other routes here as needed for your application */}
        </Routes>
      </BrowserRouter>
    </InventoryProvider>
  );
}

export default App;
