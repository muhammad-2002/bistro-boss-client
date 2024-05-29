import { useQuery } from "@tanstack/react-query";
import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import HeadingComp from "../../Shared/HeadingComp";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();

  //   const [cart, refetch] = useCart();
  //   const totalPrise = cart.reduce((acc, cur) => acc + parseFloat(cur.price), 0);
  const handleAdmin = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You Want to Update This User",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.patch(`/dashboard/admin/${id}`);
          console.log("Response received:", res);
          if (res.data.modifiedCount) {
            Swal.fire({
              title: "Updated",
              text: "Your file has been updated.",
              icon: "success",
            });

            refetch();
          }
        } catch (err) {
          console.log("Error occurred:", err);
        }
      }
    });
  };

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
        axiosSecure.delete(`/dashboard/admin/all-users/${id}`);

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await axiosSecure.get("/dashboard/users");

        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });

  return (
    <div className="min-h-screen">
      <div className="text-center  my-10">
        <HeadingComp
          heading={"How Many??"}
          titleHeading={"MANAGE ALL USERS"}
        ></HeadingComp>
      </div>
      <div className=" w-[85%]  mx-auto text-center">
        <div className=" text-start font-bold text-2xl text-white ">
          <h1>Total Users: {users.length} </h1>
        </div>
        <div>
          <div className="overflow-x-auto text-white">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-white text-md">
                  <th>SL No</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>ROLE</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, idx) => (
                  <tr>
                    <th key={item._id}>
                      <h1>{idx + 1}</h1>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <h1>{item.name}</h1>
                      </div>
                    </td>
                    <td>{item.email}</td>
                    <td>
                      {" "}
                      {item.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleAdmin(item._id)}
                          className="btn btn-ghost text-xl bg-[#D1A054]"
                        >
                          <FaUsers></FaUsers>
                        </button>
                      )}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost text-xl bg-red-700"
                      >
                        <AiFillDelete></AiFillDelete>
                      </button>
                    </td>
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

export default AllUsers;
