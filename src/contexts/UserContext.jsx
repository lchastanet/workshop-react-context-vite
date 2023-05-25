import { createContext, useContext, useState } from "react"

const UserContext = createContext()

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({ name: "", avatar: "" })

  return (
    <UserContext.Provider
      value={{
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
