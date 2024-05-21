import React from "react";

const HeadingComp = ({ heading, titleHeading }) => {
  return (
    <div className="  w-[400px] space-y-2 text-center mx-auto">
      <h1 className="text-[#D99904] text-xl">---{heading}---</h1>
      <h1 className="border-y-4 py-3 text-white font-semibold text-3xl">
        {titleHeading}
      </h1>
    </div>
  );
};

export default HeadingComp;
