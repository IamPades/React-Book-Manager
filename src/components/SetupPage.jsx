import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InventoryContext } from "../InventoryContext";

// SetupPage component for setting up the inventory capacity
function SetupPage() {
    // Accessing and setting state from context
    const { setInventory, setCapacity, capacity } = useContext(InventoryContext);
    // Local state for managing maximum number of books
    const [maxBooks, setMaxBooksLocal] = useState('');
    // Hook for programmatically navigating to other routes
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = () => {
        // Parsing the input to a number
        const maxBooksNumber = parseInt(maxBooks);
        // Checking and setting the inventory capacity
        if (maxBooksNumber > 0) {
            setCapacity(maxBooksNumber);
            setInventory([]); // Reset inventory
            alert("Inventory capacity set to " + maxBooksNumber + " books.");
            navigate('/main-menu'); // Navigate to the main menu
        } else {
            alert("Please enter a positive number for the inventory.");
        }
    };

    // Render method returns the JSX for the component
    return (
        <div>
            <h2>Setup Bookstore</h2>
            <input
                type="number"
                value={maxBooks}
                onChange={(e) => setMaxBooksLocal(e.target.value)}
                placeholder="Capacity"
            />
            <button onClick={handleSubmit}>Set Inventory</button>
            {capacity > 0 && <p>Current inventory capacity: {capacity}</p>}
            <Link to="/main-menu" className="back-link">Back to Main Menu</Link>
        </div>
    );
}

// Exporting the component for use in other parts of the application
export default SetupPage;
