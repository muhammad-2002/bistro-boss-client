import React from "react";
import { Outlet } from "react-router-dom";
import MyCart from "../Components/Dashboard/MyCart/MyCart";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-56">
        <MyCart></MyCart>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
