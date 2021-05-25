import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import GridGifs from "./GridGifs";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(["Dragon Ball"]);
  //crear una grilla por cada cateroria

  // const handleCategorie = (e) => {
  //   let cate = prompt("Agrega otra categoria");
  //   setCategories([cate, ...categories]);
  // };

  return (
    <div>
      <h2>Git Expert App</h2>
      <h4>Agregar una categoria</h4>
      <AddCategory setCategories={setCategories} />

      {categories &&
        categories.map((cate) => <GridGifs key={cate} category={cate} />)}
    </div>
  );
};

export default GitExpertApp;
