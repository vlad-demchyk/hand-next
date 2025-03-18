"use client";

import { createContext, useState, useEffect } from "react";

const DataContext = createContext();

function DataProvider({ children, initialData }) {
  const getAllPRoducts =
    Object.entries(initialData || {}).find(
      ([key]) => key === "products"
    )?.[1] || [];
  const [allProducts, setProducts] = useState(
    Array.isArray(getAllPRoducts) ? getAllPRoducts : []
  ); // початковий стан
  const [filteredProducts, setFilteredProducts] = useState(
    Array.isArray(getAllPRoducts) ? getAllPRoducts : []
  );

  return (
    <DataContext.Provider
      value={{
        allProducts,
        setProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataProvider, DataContext };
