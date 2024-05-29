import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import HeadingComp from "../Shared/HeadingComp";
import useMenu from "../useMenu/useMenu";
import useAxiosSecure from "./../CustomHook/useAxiosSecure";

const Manage_item = () => {
  const [data, refetch] = useMenu("/menu");
  const [axiosSecure] = useAxiosSecure();
  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await axiosSecure.delete(`/menu/admin/${id}`);

          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen text-white ">
      <div className="p-6 ">
        <HeadingComp
          heading={"Hurry Up!"}
          titleHeading={"MANAGE ALL ITEMS"}
        ></HeadingComp>
      </div>
      <div className="w-[85%]  p-6 bg-white bg-opacity-10 mx-auto rounded">
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
                  <th>UPDATE</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, idx) => (
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
                      <Link to={`/dashboard/admin/${item._id}`}>
                        <button className="btn btn-ghost text-xl bg-[#D1A054]">
                          <GrUpdate />
                        </button>
                      </Link>
                    </th>
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

export default Manage_item;
