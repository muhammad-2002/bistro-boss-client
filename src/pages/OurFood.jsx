import React from "react";
import Cover from "../Components/Shared/Cover";
import SimpleTabs from "../Components/Tabs/Tabs";
import bannerFood from "../assets/shop/banner2.jpg";

const OurFood = () => {
  return (
    <div>
      <Cover
        img={bannerFood}
        height={"h-screen"}
        heading={"OUR FOOD"}
        subHeading={"Would you like to try a dish?"}
      ></Cover>
      <div className="mt-6">
        <SimpleTabs></SimpleTabs>
      </div>
    </div>
  );
};

export default OurFood;
