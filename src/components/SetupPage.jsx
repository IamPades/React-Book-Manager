import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InventoryContext } from "../InventoryContext";

// SetupPage's Logic to handle Inventory Capacity
function SetupPage() {
    // Accessing and setting state from context
    const { setInventory, setCapacity, capacity } = useContext(InventoryContext);
    // Local state for managing maximum number of books
    const [maxBooksLocal, setMaxBooksLocal] = useState(0);
    // Hook to navigate to other routes
    const navigate = useNavigate();

    // Core Logic for handling Inventory Capacity
    const handleSubmit = () => {
        if (maxBooksLocal > 0) {
            setCapacity(maxBooksLocal);
            setInventory([]); // Inventory is reset when Capacity is changed
            alert("Inventory capacity set to " + maxBooksLocal + " books.");
            navigate('/main-menu'); // Navigates to main menu using useNavigate from react-router-dom

        } else {
            alert("Please enter a positive number for the inventory.");
        }
    };

    // Render SetupPage's JSX
    return (
        <div>
            <h2>Setup Bookstore</h2>
            <input
                type="number"
                value={maxBooksLocal}
                onChange={(e) => setMaxBooksLocal(parseInt(e.target.value, 10))}
                placeholder="Capacity"
            />
            <button onClick={handleSubmit}>Set Inventory</button>
            {capacity > 0 && <p>Capacity: {capacity}</p>} {/* Conditional rendering of Inventory Capacity */}
            <Link to="/main-menu" className="back-link">Main Menu</Link> {/* Declarative navigation to main menu using Link from react-router-dom */}

        </div>
    );
}

export default SetupPage;
