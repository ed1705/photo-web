import React, { useState, useEffect } from "react";
const AppContext = React.createContext();

function AppContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [apiData, setApiData] = useState();

  const fetchUserData = () => {
    fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setApiData(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <AppContext.Provider value={{ allPhotos, apiData }}>
      {children}
    </AppContext.Provider>
  );
}
export { AppContextProvider, AppContext };
