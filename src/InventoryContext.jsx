import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]); // Stores the actual books
  const [capacity, setCapacity] = useState(0);    // Stores the maximum capacity of the inventory
  const [maxBooks, setMaxBooks] = useState('N'); // Add this

    return (
      <InventoryContext.Provider value={{ inventory, setInventory, capacity, setCapacity,maxBooks, setMaxBooks }}>
        {children}
      </InventoryContext.Provider>
  );
};
