import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);

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
        console.log(id);
        console.log(!photo.isFavorite);
        return { ...photo, isFavorite: !photo.isFavorite };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }
  return (
    <AppContext.Provider value={{ allPhotos, toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppContextProvider, AppContext };
