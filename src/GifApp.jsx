import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifApp = () => {
  const [categories, setCategories] = useState([]);

  const handleAddCategory = (value) => {
    setCategories([value, ...categories]);
    // console.log(e)
  };

  const handleRemoveCategory = (category) => {
    setCategories(categories.filter((_category) => _category !== category));
  };

  const handleReset = () => {
    setCategories([]);
  };

  return (
    <>
      {/* Titulo */}
      <h1>GifApp</h1>
      {categories.length !== 0? <button className="boton" onClick={() => handleReset()}>Reset</button> : ''}

      {/* Input */}
      <AddCategory addCategory={handleAddCategory} />
      
      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid
          key={category}
          category={category}
          handleRemoveCategory={handleRemoveCategory}
        />
      ))}
    </>
  );
};
