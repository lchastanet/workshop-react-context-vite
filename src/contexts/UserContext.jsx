import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider = ({ children }) => {
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserAvatar, setCurrentUserAvatar] = useState("");

  return (
    <UserContext.Provider
      value={{
        currentUserName,
        setCurrentUserName,
        currentUserAvatar,
        setCurrentUserAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
