import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { MdOutlineRestaurant } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import usePublicAxiosSecure from "../../CustomHook/usePublicAxiosSecure";
import HeadingComp from "../../Shared/HeadingComp";
const AddItems = () => {
  const [axiosPublicSecure] = usePublicAxiosSecure();
  const [axiosSecure] = useAxiosSecure();

  ///Todo Fixed .env.local problem

  const image_hosting_Api = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGEBB
  }`;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const FileData = { image: data.image[0] };

    try {
      const res = await axios.post(image_hosting_Api, FileData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      console.log(res.data);
      if (res.data.status) {
        const menuItem = {
          name: data.name,
          price: data.price,
          category: data.category,
          recipe: data.recipe,
          image: res.data.data.display_url,
        };
        console.log(menuItem);
        const response = await axiosSecure.post(
          "/dashboard/admin/add-item",
          menuItem
        );
        if (response.data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: `${menuItem.name}has been saved`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen text-white p-5">
      <div className="mt-3">
        <HeadingComp
          heading={"What's new?"}
          titleHeading={"ADD AN ITEM"}
        ></HeadingComp>
      </div>
      <div
        className="w-[85%]  bg-white bg-opacity-10 rounded-xl mx-auto my-7
      
      "
      >
        <form onSubmit={handleSubmit(onSubmit)} className="p-10 space-y-2 ">
          <div className="space-y-2">
            <label>
              Recipe name<span className="text-red-700">*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              placeholder="Enter Recipe Name"
              className=" px-3 rounded-sm py-2  text-black w-full "
            />
          </div>

          <div className=" flex  gap-2 justify-center items-center">
            <div className="w-full space-y-2">
              <label>
                Category<span className="text-red-700">*</span>
              </label>
              <select
                defaultValue={"default"}
                {...register("category", { required: true })}
                className=" px-3 rounded-sm py-2  w-full text-black"
              >
                <option disabled value={"default"}>
                  Selected Your Category
                </option>
                <option value={"salad"}>Slald</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"desert"}>Desert</option>
              </select>
            </div>
            <div className="w-full space-y-2">
              <label>
                Price<span className="text-red-700">*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="text"
                placeholder="Price"
                className=" px-3 rounded-sm py-2  text-black w-full "
              />
            </div>
          </div>
          <div className="space-y-2">
            <label>
              Recipe Details<span className="text-red-700">*</span>
            </label>
            <textarea
              {...register("recipe", { required: true })}
              rows={6}
              type="text"
              placeholder="Enter Recipe Details"
              className=" px-3 rounded-sm py-2  text-black w-full "
            />
          </div>
          <div className="space-y-2">
            <input
              {...register("image")}
              type="file"
              className="py-2 rounded-sm"
            ></input>
          </div>
          <div>
            <button className="px-6 py-1 inline-flex gap-2 items-center text-xl font-semibold  rounded-sm bg-gradient-to-r from-[#886124] to-[#b17e2f] ">
              Add Item <MdOutlineRestaurant />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
