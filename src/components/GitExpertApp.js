import React, { useState, useEffect } from "react";
import AddCategory from "./AddCategory";
import GridGifs from "./GridGifs";

const GitExpertApp = () => {
  const [categories, setCategories] = useState(["Elite"]);
  //crear una grilla por cada cateroria
  // const handleCategorie = (e) => {
  //   let cate = prompt("Agrega otra categoria");
  //   setCategories([cate, ...categories]);
  // };

  return (
    <div>
      <h2>Gif Expert App</h2>

      <AddCategory setCategories={setCategories} />
      <hr />
      <main>
        {categories &&
          categories.map((cate) => <GridGifs key={cate} category={cate} />)}
      </main>
    </div>
  );
};

export default GitExpertApp;
