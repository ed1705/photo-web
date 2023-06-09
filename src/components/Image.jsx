import React, { useState, useContext } from "react";
import { AppContext } from "../utils/appContext";

function Image({ className, img }) {
  const { toggleFavorite } = useContext(AppContext);

  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered((prev) => !prev);
  }

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <i
          className="ri-heart-fill favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-heart-line favorite"
          onClick={() => toggleFavorite(img.id)}
        ></i>
      );
    }
  }

  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {heartIcon()} {cartIcon}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
