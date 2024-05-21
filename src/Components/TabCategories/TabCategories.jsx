import React from "react";
import OrderFoodCard from "../OrderFood/OrderFoodCard";

const TabCategories = ({ items }) => {
  return (
    <div>
      <div className="grid gap-5 px-10 grid-cols-1 md:grid-cols-3 ">
        {items.map((item) => (
          <OrderFoodCard item={item} key={item._id}></OrderFoodCard>
        ))}
      </div>
    </div>
  );
};

export default TabCategories;
