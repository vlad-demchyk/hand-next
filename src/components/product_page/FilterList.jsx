'use client'

import React, {
  useContext,
  useEffect,
} from "react";
import { DataContext } from "@/context/DataContext";
import { CategoryContext } from "@/context/CategoryContext";
import "@/styles/filterList.scss";

const FilterList = () => {
  const { allProducts, filteredProducts, setFilteredProducts } =
    useContext(DataContext);

  const { categories, setCategories, selectedCategory, setSelectedCategory } =
    useContext(CategoryContext);


  useEffect(() => {
    const categoryCount = allProducts.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    const formattedCategories = Object.entries(categoryCount).map(
      ([category, count]) => ({
        category,
        count,
      })
    );

    setCategories(formattedCategories);
  }, [filteredProducts]); // Викликається при зміні `products`

  const toggleCategory = (category) => {
    if (!category) {
      setFilteredProducts(allProducts); // Повертаємо всі продукти
      setSelectedCategory([]);
      return;
    }

    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  useEffect(() => {
    !selectedCategory.length
      ? setFilteredProducts(allProducts)
      : setFilteredProducts(
          allProducts.filter((item) => selectedCategory.includes(item.category))
        );
  }, [selectedCategory, allProducts]);

  return (
    <div className="filter-wrapper">
      <h2>Categories</h2>
      <nav>
        {categories.map((category, index) => (
          <label
            key={index}
            className={`filter-menu ${
              selectedCategory.includes(category.category) ? "active" : ""
            }`}
          >
            {category.category}{" "}
            <span
              className={
                selectedCategory.includes(category.category) ? "active" : ""
              }
            >{`(${category.count})`}</span>
            <input
              type="checkbox"
              checked={selectedCategory.includes(category.category)}
              onChange={() => {
                toggleCategory(category.category);
              }}
              style={{ display: "none" }}
            />{" "}
          </label>
        ))}
        <button onClick={() => toggleCategory()}>Reset filter</button>
      </nav>
    </div>
  );
};

export default FilterList;
