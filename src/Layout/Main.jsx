import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Shared/Navbar";

const Main = () => {
  const location = useLocation();
  const noNavAndFooter =
    location.pathname.includes("sign-up") ||
    location.pathname.includes("login");
  return (
    <div>
      {noNavAndFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavAndFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
