import React from "react";
import { Bars } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Components/CustomHook/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useAuth();
  if (loading) {
    return (
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
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ form: location }}></Navigate>;
};

export default PrivateRoute;
