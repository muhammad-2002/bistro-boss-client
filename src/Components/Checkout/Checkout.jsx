import React from "react";
import featurd from "../../assets/home/featured.jpg";
import HeadingComp from "../Shared/HeadingComp";

const Checkout = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${featurd})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="mt-12 relative pt-10 pb-20 bg-fixed"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <HeadingComp
          heading={"Check it out"}
          titleHeading={"FROM OUR MENU"}
        ></HeadingComp>
        <div className="flex justify-center w-[80%] mx-auto md:flex-row mt-16">
          <div className="w-1/2 flex justify-center items-center">
            <img className="w-[80%]" src={featurd} alt="" />
          </div>
          <div className="w-1/2 flex flex-col text-white justify-center">
            <h1 className="text-lg">March 20, 2023</h1>
            <h1 className="text-xl">WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <div>
              <button className="btn mt-3 btn-outline border-[white] text-white border-0 border-b-4">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
