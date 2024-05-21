import React from "react";

const OrderFoodCard = ({ item }) => {
  const { image, name, recipe, prise, category } = item;
  return (
    <div>
      <div className="card rounded-none card-compact min-h-[450px] bg-base-100 shadow-xl">
        <figure>
          <img className="w-full" src={`${image}`} alt="Shoes" />
        </figure>
        <div className="card-body flex justify-center bg-[#F3F3F3] text-black">
          <h2 className="card-title text-black">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn   text-[#BB8506] uppercase border-b-4 btn-outline border-0 border-solid border-[#BB8506]">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;
