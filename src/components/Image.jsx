import React, { useState, useContext, useRef } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../utils/appContext";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
  const { toggleFavorite, cartImage, cartItems, setCartItems, removeFromCart } =
    useContext(AppContext);

  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();

  // function handleHover() {
  //   setHovered((prev) => !prev);
  // }

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

  function cartIcons() {
    if (cartItems.some((e) => e.id === img.id)) {
      return (
        <i
          onClick={() => removeFromCart(img.id)}
          className="ri-shopping-cart-fill cart"
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          onClick={() => cartImage(img)}
          className="ri-add-circle-line cart"
        ></i>
      );
    }
  }

  return (
    <div className={`${className} image-container`} ref={ref}>
      {heartIcon()}
      {cartIcons()}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
