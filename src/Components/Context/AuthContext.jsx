import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
export function AuthContextProvider({ children }) {
  const [Token, setToken] = useState(() => localStorage.getItem("token"));

  const tokenValue = localStorage.getItem("token");
  useEffect(() => {
    if (tokenValue != null) {
      setToken(tokenValue);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ Token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
}
