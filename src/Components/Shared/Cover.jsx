import React from "react";
import { Parallax } from "react-parallax";
const Cover = ({ img, heading, subHeading, height }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className={`relative ${height}`}>
        {/* <img
          src={img}
          alt="Chef Service"
          className={`w-full ${height} object-cover`}
        /> */}
        <div className="absolute py-16 top-1/2 left-1/2 transform text-white -translate-x-1/2 -translate-y-1/2 w-3/4 bg-black bg-opacity-50 p-8 text-center flex flex-col space-y-4">
          <h1 className="font-cinzel font-bold text-6xl">{heading}</h1>
          <p className="font-cinzel">{subHeading}</p>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
