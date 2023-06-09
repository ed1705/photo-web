import React, { useState, useContext } from "react";
import { AppContext } from "../utils/appContext";

function Image({ className, img }) {
  const { toggleFavorite } = useContext(AppContext);

  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered((prev) => !prev);
  }

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      {hovered && (
        <>
          <i
            onClick={() => toggleFavorite(img.id)}
            className="ri-heart-line favorite"
          ></i>
          <i className="ri-add-circle-line cart"></i>
        </>
      )}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
