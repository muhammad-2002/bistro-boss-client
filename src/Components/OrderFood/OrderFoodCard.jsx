import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../CustomHook/useAuth";
import useAxiosSecure from "../CustomHook/useAxiosSecure";
import useCart from "../CustomHook/useCart";

const OrderFoodCard = ({ item }) => {
  const { image, name, recipe, price, category, _id } = item;

  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const [, refetch] = useCart();
  const handleAddToCart = async () => {
    if (user && user?.email) {
      const userEmail = user?.email;
      const obj = {
        menuId: _id,
        image,
        name,
        recipe,
        price,
        category,
        userEmail,
      };
      try {
        const res = await axiosSecure.post("/carts", obj);
        console.log(res);

        if (res?.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
          //reload ul
          refetch();
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Allready added!",
        });
        console.log(err);
      }
    } else {
      Swal.fire({
        title: "You are Not Login Yet !",
        text: "Please Login and next",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "OK I did it !",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { form: location } });
        }
      });
    }
  };
  return (
    <div>
      <div className="card relative rounded-none card-compact min-h-[450px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={`${image}`} alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center  bg-[#F3F3F3] text-black">
          <h2 className="card-title text-black">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button
              onClick={handleAddToCart}
              className="btn   text-[#BB8506] uppercase border-b-4 btn-outline border-0 border-solid border-[#BB8506]"
            >
              Add To Card
            </button>
          </div>

          <p className="absolute top-5 right-5 bg-[#0F172A] text-white w-10 text-center">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
