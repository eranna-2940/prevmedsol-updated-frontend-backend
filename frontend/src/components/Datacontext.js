// DataContext.js
import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToData = (newItem) => {
    setData([...data, newItem]);
  };

  const addToCart = (item) => {
    const amount = Number(item.amount);

    if (!isNaN(amount)) {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, id: Math.random().toString(36).substr(2, 9), amount },
      ]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);

  return (
    <DataContext.Provider value={{ data, addToData, cartItems, addToCart, removeFromCart, totalAmount }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
