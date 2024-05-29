import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import Swal from "sweetalert2";
import useAuth from "../Components/CustomHook/useAuth";
import SocailLogin from "../Components/SocailLogin/SocailLogin";
import authenticaton from "../assets/others/authentication2.png";
import woodImg from "../assets/reservation/wood-grain-pattern-gray1x.png";
const Login = () => {
  const { SignInEmail } = useAuth();

  const [disabled, setDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const form = location?.state?.form?.pathname || "/";
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const onSubmit = async (user) => {
    try {
      const data = await SignInEmail(user.email, user.password);
      if (data) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "User Created Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(form);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
      setMessage("");
    } else {
      setMessage("Wrong Captcha Try again !");
    }
  };

  return (
    <div>
      <div
        className="h-screen flex items-center"
        style={{ backgroundImage: `url(${woodImg})` }}
      >
        <div className="flex w-[80%] mx-auto  ">
          <div className="hero    p-16 shadow-xl border-2 items-center justify-between h-[550px]  mx-auto flex  ">
            <div className="flex flex-col items-center gap-20 justify-between  lg:flex-row">
              <div className="text-center flex  items-center  h-[480px] w-[50%]">
                <img
                  className="w-full"
                  src={authenticaton}
                  alt="authentication"
                />
              </div>
              <div className="  w-[50%] max-w-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="">
                  <h1 className=" text-center text-2xl font-bold ">Login</h1>

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

                  <div className="form-control">
                    <label className="label">
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      onBlur={handleCaptcha}
                      type="text"
                      name="captcha"
                      placeholder="Type Captcha above"
                      className="px-4 py-2"
                    />
                    <small className="text-red-700 ">{message}</small>
                    {/* <button className="btn btn-outline btn-xs mt-2">
                      validate
                    </button> */}
                  </div>

                  <div className="form-control mt-2">
                    <input
                      disabled={disabled}
                      type="submit"
                      className=" btn text-white bg-[#D1A054]"
                      value={"Login"}
                    ></input>
                  </div>
                </form>
                <div className="text-center space-y-2 py-1">
                  <p className="text-sm">
                    You don't have a Account?{" "}
                    <Link className="text-[#D1A054]" to="/sign-up">
                      Go to SignUp
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

export default Login;
