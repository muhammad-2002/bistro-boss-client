import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminHome from "../Components/AdminHome/AdminHome";
import AddItems from "../Components/Dashboard/AddItems/AddItems";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import Cart from "../Components/Dashboard/Cart/Cart";
import Payment from "../Components/Dashboard/Payment/Payment";
import PaymentDetails from "../Components/Dashboard/Payment/PaymentDetails";
import Manage_item from "../Components/Manage_item/Manage_item";
import Update_item from "../Components/Manage_item/Update_item";
import UserHome from "../Components/UserHome/UserHome";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import OurFood from "../pages/OurFood";
import OurMenu from "../pages/OurMenu";
import SignUp from "../pages/SignUp";
import AdminRouter from "./AdminRouter";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/our-menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/our-food/:category",
        element: <OurFood></OurFood>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "dashboard/admin/home",
        element: (
          <AdminRouter>
            <AdminHome></AdminHome>
          </AdminRouter>
        ),
      },
      {
        path: "dashboard/user/home",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-details",
        element: <PaymentDetails></PaymentDetails>,
      },

      {
        path: "/dashboard/admin/all-users",
        element: (
          <AdminRouter>
            {" "}
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/add-items",
        element: (
          <AdminRouter>
            <AddItems></AddItems>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/admin/manage-item",
        element: <Manage_item></Manage_item>,
      },
      {
        path: "/dashboard/admin/:id",
        element: <Update_item></Update_item>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/admin/${params.id}`),
      },
    ],
  },
]);

export default router;
