import React from "react";
import {
  FaBook,
  FaCalendar,
  FaHome,
  FaList,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { FaWallet } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import {
  MdEmail,
  MdOutlineRestaurant,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { RiFeedbackFill } from "react-icons/ri";
import { TbBrandBooking } from "react-icons/tb";
import { Link, NavLink } from "react-router-dom";
import useAdmin from "../../CustomHook/useAdmin";
import useAuth from "../../CustomHook/useAuth";
import useCart from "../../CustomHook/useCart";

const MyCart = () => {
  const [isAdmin] = useAdmin();
  const { user } = useAuth();
  const [cart] = useCart();

  return (
    <div className="fixed">
      <div className="flex">
        <div className=" w-56 min-h-screen bg-[#D1A054]">
          <div className="text-center mt-6 font-extrabold">
            <h1 className="text-2xl font-cinzel">BISTRO BOSS</h1>
            <h3 className="text-xl font-cinzel">Restaurant</h3>
          </div>

          {/* link */}
          <ul className="font-cinzel space-y-2 pl-8 mt-4 font-semibold">
            {isAdmin ? (
              <>
                <li>
                  <NavLink
                    to="dashboard/admin/home"
                    className="inline-flex items-center gap-1"
                  >
                    {" "}
                    <FaHome />
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/add-items"
                    className="inline-flex items-center gap-1"
                  >
                    <MdOutlineRestaurant />
                    add items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/manage-item"
                    className="inline-flex items-center gap-1"
                  >
                    <FaList></FaList>
                    manage items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/bookings"
                    className="inline-flex items-center gap-1"
                  >
                    {" "}
                    <FaBook></FaBook>
                    Manage bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/admin/all-users"
                    className="inline-flex items-center gap-1"
                  >
                    <FaUsers></FaUsers>
                    all users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink
                    to="dashboard/user/home"
                    className="inline-flex items-center gap-1"
                  >
                    {" "}
                    <FaHome />
                    User Home
                  </NavLink>
                </li>
                <li>
                  <Link className="inline-flex items-center gap-1">
                    <FaCalendar></FaCalendar>
                    reservation
                  </Link>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-details"
                    className="inline-flex items-center gap-1"
                  >
                    <FaWallet></FaWallet>payment history
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/cart"
                    className="inline-flex items-center gap-1"
                  >
                    {" "}
                    <FaShoppingCart></FaShoppingCart>
                    my cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <Link className="inline-flex items-center gap-1">
                    <RiFeedbackFill />
                    add review
                  </Link>
                </li>
                <li>
                  <Link className="inline-flex items-center gap-1">
                    {" "}
                    <TbBrandBooking />
                    my booking
                  </Link>
                </li>
              </>
            )}
          </ul>
          <br></br>
          <div className="p-3">
            <hr></hr>
          </div>
          <ul className="font-cinzel space-y-2 pl-8 mt-4 font-semibold">
            <li className="">
              <Link to="/" className="inline-flex items-center gap-1">
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1 ">
                {" "}
                <IoMenu />
                Menu
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1 ">
                <MdOutlineShoppingBag />
                Shop
              </Link>
            </li>
            <li>
              <Link className="inline-flex items-center gap-1 ">
                {" "}
                <MdEmail></MdEmail>Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="flex-1"></div> */}
      </div>
    </div>
  );
};

export default MyCart;
