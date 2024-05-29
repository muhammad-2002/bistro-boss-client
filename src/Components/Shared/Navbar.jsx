import React from "react";
import { Link } from "react-router-dom";
import icon from "../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png";
import useAdmin from "../CustomHook/useAdmin";
import useCart from "../CustomHook/useCart";
import useAuth from "./../CustomHook/useAuth";
const Navbar = () => {
  const [cart] = useCart();

  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const handleLogOut = () => {
    logOut().then((data) => console.log(data));
  };
  const option = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="our-menu">Our Menu</Link>
      </li>
      <li>
        <Link to="our-food/salad">Our Food</Link>
      </li>
      {isAdmin && user && (
        <li>
          <Link to="/dashboard/dashboard/admin/home">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/dashboard/user/home">Dashboard</Link>
        </li>
      )}
    </>
  );

  return (
    <div>
      <div className="navbar  flex justify-between  fixed z-20 bg-black text-white bg-opacity-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 flex justify-end border-5 uppercase rounded-box "
            >
              {option}
            </ul> */}
          </div>
          <a className="font-cinzel pl-4">
            <h1 className=" text-xl font-bold">BISTRO BOSS</h1>
            <p className="text-lg font-semibold">Restaurant</p>
          </a>
        </div>

        <div className=" ">
          <div className="navbar-center hidden lg:flex ">
            <ul className="menu uppercase font-bold menu-horizontal px-1">
              {option}
            </ul>
          </div>

          <div className="flex justify-around items-center   w-[200px] ">
            <Link to="/dashboard">
              <button className="relative">
                <div className="badge absolute top-5 badge-secondary">
                  +{cart.length}
                </div>
                <img className="w-[50px] " src={icon}></img>
              </button>
            </Link>
            {user ? (
              <div className="flex font-bold  gap-2 pl-10  border-[gray]">
                <button className="" onClick={handleLogOut}>
                  LOGOUT
                </button>
                <div className="w-[40px] h-[40px] rounded-full">
                  <img
                    className="rounded-full"
                    src={`${user.photoURL}`}
                    alt=""
                  ></img>
                </div>
              </div>
            ) : (
              <Link to="/login" className="">
                LOGIN
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
