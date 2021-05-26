import React from "react";

const GifGridItem = ({ id, title, imageUrl }) => {
  return (
    <article className="animate__animated animate__fadeIn">
      <img src={imageUrl} alt={title} />
      <p>{title}</p>
    </article>
  );
};

export default GifGridItem;
