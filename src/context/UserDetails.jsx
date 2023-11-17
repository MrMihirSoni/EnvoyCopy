import React from "react";

export const UserDetails = React.createContext();

export function UserDetailsProvider({ children }) {
    const [userDetails, setUserDetails] = React.useState({ 
        userName:'',
        password:''
    })
  console.log(userDetails)
    return (
      <UserDetails.Provider value={{ userDetails, setUserDetails }}>
        {children}
      </UserDetails.Provider>
    )
  }