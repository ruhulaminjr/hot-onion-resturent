import { useContext } from "react";
import { AuthProvider } from "./ProvderAuth";

const useAuth = () => {
  return useContext(AuthProvider);
};

export default useAuth;
