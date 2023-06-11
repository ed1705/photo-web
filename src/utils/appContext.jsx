import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems);

  const fetchUserData = () => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setAllPhotos(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function cartImage(imgObj) {
    console.log(imgObj);
    setCartItems((prevItems) => [...prevItems, imgObj]);
  }

  function removeFromCart(id) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <AppContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartImage,
        cartItems,
        setCartItems,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
export { AppContextProvider, AppContext };
