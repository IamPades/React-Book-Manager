// eslint-disable-next-line no-unused-vars
import React, { createContext, useState } from 'react';

export const InventoryContext = createContext();

// eslint-disable-next-line react/prop-types
export const InventoryProvider = ({ children }) => {
  const [inventory, setInventory] = useState([]);

  return (
    <InventoryContext.Provider value={{ inventory, setInventory }}>
      {children}
    </InventoryContext.Provider>
  );
};
