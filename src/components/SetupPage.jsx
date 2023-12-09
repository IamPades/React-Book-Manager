import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { InventoryContext } from "../InventoryContext";

function SetupPage() {
    const { setInventory, setCapacity, capacity } = useContext(InventoryContext);
    const [maxBooks, setMaxBooksLocal] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const maxBooksNumber = parseInt(maxBooks);
        if (maxBooksNumber > 0) {
            setCapacity(maxBooksNumber);
            setInventory([]); // Reset inventory
            alert("Inventory capacity set to " + maxBooksNumber + " books.");
            navigate('/main-menu');
        } else {
            alert("Please enter a positive number for the inventory.");
        }
    };

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

export default SetupPage;
