import React, { useContext, useState } from "react";

import { AppContext } from "../utils/appContext";

function CartItem({ item }) {
  const { removeFromCart } = useContext(AppContext);
  const [hovered, setHovered] = useState(false);

  const binHover = !hovered ? "ri-delete-bin-line" : "ri-delete-bin-fill";

  return (
    <div className="cart-item">
      <i
        onClick={() => removeFromCart(item.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={binHover}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
