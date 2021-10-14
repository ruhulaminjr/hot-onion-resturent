import React, { createContext } from "react";
import useFirebase from "../firebase/useFirebase";
export const AuthProvider = createContext();

const ProvderAuth = ({ children }) => {
  const allAuth = useFirebase();
  return (
    <AuthProvider.Provider value={allAuth}>{children}</AuthProvider.Provider>
  );
};

export default ProvderAuth;
