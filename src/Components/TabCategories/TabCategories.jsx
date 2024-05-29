import React from "react";
import OrderFoodCard from "../OrderFood/OrderFoodCard";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Utility function to chunk an array
const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const TabCategories = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  // Chunk the items array into groups of 6
  const chunkedItems = chunkArray(items, 6);

  return (
    <div>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        pagination={pagination}
        modules={[Pagination]}
      >
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid gap-5 px-10 grid-cols-1 md:grid-cols-3">
              {chunk.map((item) => (
                <OrderFoodCard item={item} key={item._id}></OrderFoodCard>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TabCategories;
