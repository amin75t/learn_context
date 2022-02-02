import React, { useContext, createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [pws, setPws] = useState("");

  return (
    <UserContext.Provider value={{ setUser, user, pws, setPws }}>
      {children}
    </UserContext.Provider>
  );
};
export const Usecontext = () => {
  return useContext(UserContext);
};

export default UserProvider;
