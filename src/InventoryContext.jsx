import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]); // Hook to manage State of Inventory
  const [capacity, setCapacity] = useState(0);  // Hook to manage Capacity of Inventory

    return (
      <InventoryContext.Provider value={{ inventory, setInventory, capacity, setCapacity}}>
        {children}
      </InventoryContext.Provider>
  );
};
