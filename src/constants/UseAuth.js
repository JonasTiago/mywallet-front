import { createContext, useState } from "react";

export const UserAuthContext = createContext({});

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({})

  return (
    <UserAuthContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserAuthContext.Provider>
  );
};
