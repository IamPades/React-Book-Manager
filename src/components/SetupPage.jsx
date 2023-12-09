import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InventoryContext } from "../InventoryContext";

function SetupPage() {
    const [maxBooks, setMaxBooks] = useState(0);
    const [isSet, setIsSet] = useState(false); // New state for confirmation message
    const { setInventory } = useContext(InventoryContext);
    const navigate = useNavigate(); // Added for navigation

    const handleSubmit = () => {
        setInventory(Array(maxBooks).fill(null));
        setIsSet(true); // Set confirmation message
        // Optional: navigate('/main-menu'); // Uncomment to navigate automatically
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
            {isSet && <p>Inventory set. Go to the main menu to add books.</p>} {/* Confirmation message */}
            <Link to="/main-menu">Go to Main Menu</Link>
        </div>
    );
}

export default SetupPage;
