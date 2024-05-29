import React from "react";
import { Bars } from "react-loader-spinner";
import { useLocation } from "react-router-dom";
import useAdmin from "../Components/CustomHook/useAdmin";

import useAuth from "../Components/CustomHook/useAuth";

const AdminRouter = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isLoading] = useAdmin();
  const location = useLocation();
  if (isLoading || loading) {
    <div className="h-screen flex justify-center items-center">
      <Bars
        height="80"
        width="80"
        color="#ffff"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>;
  }
  if (user && isAdmin) {
    return children;
  }
  <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRouter;
