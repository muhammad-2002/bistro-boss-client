import React from "react";

const MenuCard = ({ item }) => {
  const { image, name, recipe, price } = item;
  return (
    <div className="flex text-white  gap-2">
      <div className="w-[100px] min-h-[80px]">
        <img
          className="w-[100px] h-12"
          style={{ borderRadius: "0px 200px 200px 200px" }}
          src={image}
          alt="menu item"
        ></img>
      </div>
      <div className="space-y-1">
        <h1 className="text-xl uppercase ">{name}--------------</h1>
        <p>{recipe}</p>
      </div>
      <div>
        <p className="text-[#BB8506]">${price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
