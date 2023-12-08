import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import SetupPage from "./components/SetupPage";
import MainMenuPage from "./components/MainMenuPage";
import { InventoryProvider } from "./InventoryContext";

function App() {
  return (
    <InventoryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/setup" element={<SetupPage />} />
          <Route path="/main-menu" element={<MainMenuPage />} />
          {/* Other routes go here */}
        </Routes>
      </Router>
    </InventoryProvider>
  );
}

export default App;
