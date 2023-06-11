import React, { useContext } from "react";
import { AppContext } from "../utils/appContext";

function Cart() {
  const { cartItems } = useContext(AppContext);
  const cartItemElements = cartItems.map((item) => <h2>{item.id}</h2>);

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
    </main>
  );
}

export default Cart;
