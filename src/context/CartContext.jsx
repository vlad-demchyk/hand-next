'use client'
import { createContext, useState, useEffect } from "react";


const CartContext = createContext();

function CartProvider({ children }) {
  const getStoredData = (name) => {
    try {
      const data = localStorage.getItem(name);
      return data ? JSON.parse(data) : [];
    } catch {
      return [];
    }
  };

  const [orders, setOrders] = useState(() => getStoredData("cartOrders"));
  const [favoriteItems, setFavoriteItems] = useState(() =>
    getStoredData("favoriteItems")
  );


  useEffect(() => {
    localStorage.setItem("cartOrders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  return (
    <CartContext.Provider
      value={{ orders, setOrders, favoriteItems, setFavoriteItems }}
    >
      {children}
    </CartContext.Provider>
  );
}

export {CartContext, CartProvider}