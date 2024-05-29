import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import HeadingComp from "../../Shared/HeadingComp";
import useCart from "./../../CustomHook/useCart";
const Cart = () => {
  const [axiosSecure] = useAxiosSecure();

  const [cart, refetch] = useCart();
  const totalPrise = cart.reduce((acc, cur) => acc + parseFloat(cur.price), 0);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cart/${id}`);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="text-center  my-10">
        <HeadingComp
          heading={"My Cart"}
          titleHeading={"WANNA ADD MORE?"}
        ></HeadingComp>
      </div>
      <div className=" w-[85%] min-h-screen mx-auto text-center">
        <div className="grid grid-cols-3 text-center  font-bold text-2xl text-white ">
          <h1>Total Order: {cart.length} </h1>
          <h1>Total Prise: ${totalPrise}</h1>
          <div>
            {cart.length > 0 ? (
              <Link to="/dashboard/payment">
                <button className="bg-[#D1A054] px-4 py-1 text-[16px] rounded-sm cursor-pointer text-white font-bold">
                  Pay Now
                </button>
              </Link>
            ) : (
              <button
                disabled
                className="bg-[gray] px-4 py-1 text-[16px] rounded-sm cursor-pointer text-white font-bold"
              >
                Pay Now
              </button>
            )}
          </div>
        </div>
        <div>
          <div className="overflow-x-auto text-white">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white text-md">
                  <th>SL No</th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>PRICE</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, idx) => (
                  <tr key={item._id}>
                    <th>
                      <h1>{idx + 1}</h1>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask  rounded-none w-12 h-12">
                            <img src={`${item.image}`} alt="Avatar" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost text-xl bg-red-700"
                      >
                        <AiFillDelete></AiFillDelete>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
