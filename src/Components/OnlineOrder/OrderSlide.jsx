import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";

const OrderSlide = () => {
  return (
    <div>
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide
            className="relative group"
            style={{ width: "350px", height: "400px", marginRight: "10px" }}
          >
            <img
              className=" object-cover dark:hover-block w-full "
              src={slide1}
            ></img>
            <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-50  inset-0 bg-black "></div>
            <p className="text-3xl hidden font-cinzel group-hover:block text-white font-bold -translate-y-1/2  -translate-x-1/2 top-1/2 left-1/2 absolute transition-all duration-300">
              Salads
            </p>
          </SwiperSlide>
          <SwiperSlide
            className="relative group"
            style={{ width: "350px", height: "400px", marginRight: "10px" }}
          >
            <img
              className=" object-cover dark:hover-block w-full "
              src={slide2}
            ></img>
            <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-50  inset-0 bg-black "></div>
            <p className="text-3xl hidden font-cinzel group-hover:block text-white font-bold -translate-y-1/2  -translate-x-1/2 top-1/2 left-1/2 absolute transition-all duration-300">
              Pizzas
            </p>
          </SwiperSlide>
          <SwiperSlide
            className="relative group"
            style={{ width: "350px", height: "400px", marginRight: "10px" }}
          >
            <img
              className=" object-cover dark:hover-block w-full "
              src={slide3}
            ></img>
            <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-50  inset-0 bg-black "></div>
            <p className="text-3xl hidden font-cinzel group-hover:block text-white font-bold -translate-y-1/2  -translate-x-1/2 top-1/2 left-1/2 absolute transition-all duration-300">
              Soups
            </p>
          </SwiperSlide>
          <SwiperSlide
            className="relative group"
            style={{ width: "350px", height: "400px", marginRight: "10px" }}
          >
            <img
              className=" object-cover dark:hover-block w-full "
              src={slide4}
            ></img>
            <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-50  inset-0 bg-black "></div>
            <p className="text-3xl hidden font-cinzel group-hover:block text-white font-bold -translate-y-1/2  -translate-x-1/2 top-1/2 left-1/2 absolute transition-all duration-300">
              desserts
            </p>
          </SwiperSlide>
          <SwiperSlide
            className="relative group"
            style={{ width: "350px", height: "400px", marginRight: "10px" }}
          >
            <img
              className=" object-cover dark:hover-block w-full "
              src={slide5}
            ></img>
            <div className="absolute transition-all duration-300 opacity-0 group-hover:opacity-50  inset-0 bg-black "></div>
            <p className="text-3xl hidden font-cinzel group-hover:block text-white font-bold -translate-y-1/2  -translate-x-1/2 top-1/2 left-1/2 absolute transition-all duration-300">
              Salads
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default OrderSlide;
