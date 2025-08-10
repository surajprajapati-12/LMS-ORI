// src/context/AppContextProvider.jsx
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
  const value = {
    // You can add states here later
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
