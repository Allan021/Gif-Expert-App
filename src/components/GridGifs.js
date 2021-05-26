import React, { useEffect, useState } from "react";
import PropTypes from "prop-types"; // ES6
import GifGridItem from "./GifGridItem";
import { getGifs } from "../helpers/getGifs";
import useFetchGift from "../hooks/useFetchGift";
import Loader from "./Loader";
const GridGifs = ({ category }) => {
  const { data: images, loading, error } = useFetchGift(category);

  //para que esta wea solo se renderize una vez que inicie la aplicacion ya que cada ve z que el estado cambia sse renderiza la aplciacion y por ende todo se vuelce a ejecutar hasta la ejecucio de ña funcion

  //usuare el useEfec y por ende no quiero todo la informacion xd

  return (
    <>
      <h3 className="title animate__animated animate__backInLeft">
        {category}
      </h3>
      {loading && <Loader />}
      <section className="grid-gif">
        {!images && <p>No hay resultados en tu busqueda</p>}
        {images && images.map((img) => <GifGridItem key={img.id} {...img} />)}
      </section>
    </>
  );
};

GridGifs.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GridGifs;
