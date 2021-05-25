import React, { useState } from "react";
import PropTypes from "prop-types"; // ES6
const GridGifs = ({ category }) => {
const [images, setImages] = useState([])




  return (
    <div>
      <h3>{category}</h3>
    </div>
  );
};

GridGifs.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GridGifs;
