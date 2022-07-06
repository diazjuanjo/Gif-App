import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
    // console.log(e)
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>
      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
