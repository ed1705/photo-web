import React, { useContext } from "react";
import { AppContext } from "../utils/appContext";
import CartItem from "../components/CartItem";

function Cart() {
  const { cartItems } = useContext(AppContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  const totalCost = cartItems.length * 5.99;
  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">
        Total:
        {totalCost.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}{" "}
      </p>
      <div className="order-button">
        <button>Place Order</button>
      </div>
    </main>
  );
}

export default Cart;
