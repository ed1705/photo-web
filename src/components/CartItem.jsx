import React, { useContext, useState } from "react";

import { AppContext } from "../utils/appContext";
import useHover from "../hooks/useHover";

function CartItem({ item }) {
  const { removeFromCart } = useContext(AppContext);
  // const [hovered, setHovered] = useState(false);
  const [hovered, ref] = useHover();

  const binHover = !hovered ? "ri-delete-bin-line" : "ri-delete-bin-fill";

  return (
    <div className="cart-item">
      <i
        className={binHover}
        onClick={() => removeFromCart(item.id)}
        ref={ref}
      ></i>
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
