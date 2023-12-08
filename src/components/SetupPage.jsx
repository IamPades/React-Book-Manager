import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { InventoryContext } from "../InventoryContext";

function SetupPage() {
  const [maxBooks, setMaxBooks] = useState(0);
  const { setInventory } = useContext(InventoryContext);

  const handleSubmit = () => {
    setInventory(Array(maxBooks).fill(null));
  };

  return (
    <div>
      <h2>Setup Bookstore</h2>
      <input
        type="number"
        value={maxBooks}
        onChange={(e) => setMaxBooks(e.target.value)}
        placeholder="Maximum number of books"
      />
      <button onClick={handleSubmit}>Set Inventory</button>
      <Link to="/main-menu">Go to Main Menu</Link>
    </div>
  );
}

export default SetupPage;
