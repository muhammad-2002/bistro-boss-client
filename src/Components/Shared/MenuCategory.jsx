import React from "react";
import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";

const MenuCategory = ({ items, btnText, category }) => {
  return (
    <div>
      <div className="grid grid-cols-1 w-[85%] mx-auto my-4 gap-4 mt-7 md:grid-cols-2">
        {items.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
      <p className="text-center">
        <Link to={`/our-food/${category}`}>
          <button className="btn  bg-[#250b25] text-white uppercase border-b-4 btn-outline border-0 border-solid border-[white]">
            {btnText}
          </button>
        </Link>
      </p>
    </div>
  );
};

export default MenuCategory;
