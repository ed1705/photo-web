import React, { useContext, useState } from "react";
import { AppContext } from "../utils/appContext";
import CartItem from "../components/CartItem";

function Cart() {
  const [buttonText, setButtonText] = useState("Place Order");
  const { cartItems, removeAllCartItems } = useContext(AppContext);
  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  console.log(cartItemElements);

  const totalCost = cartItems.length * 5.99;

  function placeOrder() {
    setButtonText("Ordering...");
    setTimeout(() => {
      setButtonText("Place Order");
      console.log("order placed");
      removeAllCartItems();
    }, 3000);
  }

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
        {cartItems.length > 0 && (
          <button onClick={placeOrder}>{buttonText}</button>
        )}
      </div>
    </main>
  );
}

export default Cart;
