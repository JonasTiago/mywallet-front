import { createContext, useState } from "react";

export const UserAuthContext = createContext({});

export const UserAuthProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <UserAuthContext.Provider value={{ user }}>
      {children}
    </UserAuthContext.Provider>
  );
};
