import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../Components/CustomHook/useAuth";
import usePublicAxiosSecure from "../Components/CustomHook/usePublicAxiosSecure";
import SocailLogin from "../Components/SocailLogin/SocailLogin";
import authenticaton from "../assets/others/authentication2.png";
import woodImg from "../assets/reservation/wood-grain-pattern-gray1x.png";

const SignUp = () => {
  const { createUser, updateUser } = useAuth();
  const [axiosPublicSecure] = usePublicAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (user) => {
    try {
      const data = await createUser(user.email, user.password);

      if (data) {
        await updateUser(user.name, user.PhotoURL);

        try {
          const userObj = {
            name: user?.name,
            email: user?.email,
          };
          const res = await axiosPublicSecure.post("/dashboard/users", userObj);
          console.log(res.data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "User Created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location?.state ? location.state : "/");
        } catch (err) {
          console.log(err);
        }
      }
    } catch (err) {
      console.log(err);
    }
    // data.reset();
  };
  return (
    <div>
      <div
        className="h-screen flex items-center"
        style={{ backgroundImage: `url(${woodImg})` }}
      >
        <div className="flex w-[80%] mx-auto  ">
          <div className="hero    p-16 shadow-xl border-2 items-center justify-between h-[550px]  mx-auto flex  ">
            <div className="flex flex-col items-center gap-20 justify-between  lg:flex-row-reverse">
              <div className="text-center flex  items-center  h-[480px] w-[50%]">
                <img
                  className="w-full"
                  src={authenticaton}
                  alt="authentication"
                />
              </div>
              <div className="  w-[50%] max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <h1 className=" text-center text-2xl font-bold ">Sign UP</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="Name"
                      name="name"
                      placeholder="Enter your Name"
                      className="px-4 py-2"
                    />

                    {errors.name && (
                      <span className="text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoURL</span>
                    </label>
                    <input
                      {...register("PhotoURL", { required: true })}
                      type="text"
                      name="PhotoURL"
                      placeholder="Photo Url"
                      className="px-4 py-2"
                    />
                    {errors.PhotoURL && (
                      <span className="text-sm text-red-700">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          message: "Invalid email address",
                        },
                      })}
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-700">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      {...register("password", {
                        required: "Password is required",
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                          message:
                            "password must be strong uppercase lowercase symbol and letter included ",
                        },
                      })}
                      type="password"
                      placeholder="password like abcABC@123"
                      className="px-4 py-2"
                    />
                    {errors.password && (
                      <p className="text-sm text-red-700">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                  <div className="form-control mt-2">
                    <input
                      type="submit"
                      className=" btn text-white bg-[#D1A054]"
                      value={"SignUp"}
                    ></input>
                  </div>
                </form>
                <div className="text-center space-y-2 py-1">
                  <p className="text-sm">
                    Already registered?{" "}
                    <Link className="text-[#D1A054]" to="/login">
                      Go to log in
                    </Link>
                  </p>
                  <p>Or sign up with</p>
                  <SocailLogin></SocailLogin>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
