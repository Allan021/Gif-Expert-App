import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
const AddCategory = ({ setCategories }) => {
  const [busqueda, setBusqueda] = useState(""); //para que me evite los warning wey que esto s eejecuta al mover llas categorias

  //actualizando el estado
  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //si la bisqeuda realizada es mayor que 2
    //actualizare la lista de categorias con el estado de ,o aplicacion mi pana y esto mediante esta callback que recibe el estado y asi me evito pasa r la categora
    if (busqueda.length > 2) {
      setCategories((cate) => [...cate, busqueda]);
      setBusqueda("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={busqueda} onChange={handleChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
