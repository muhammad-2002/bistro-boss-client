import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;
