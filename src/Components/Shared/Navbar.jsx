import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const option = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="our-menu">Our Menu</Link>
      </li>
      <li>
        <Link to="our-food">Our Food</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar fixed z-20 bg-black text-white bg-opacity-20">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {option}
            </ul>
          </div>
          <a className="font-cinzel pl-4">
            <h1 className=" text-xl font-bold">BISTRO BOSS</h1>
            <p className="text-lg font-semibold">Restaurant</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{option}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
