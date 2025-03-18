'use client'
import { createContext, useState } from "react";

const CategoryContext = createContext();

function CategoryProvider({ children }) {

  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  return (
    <CategoryContext.Provider
      value={{ categories, setCategories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
}


export {CategoryProvider, CategoryContext}