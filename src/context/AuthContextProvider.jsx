import React from "react";

export const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  
    return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        {children}
      </AuthContext.Provider>
    )
  }