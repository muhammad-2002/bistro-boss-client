import React from "react";
import chef from "../../assets/home/chef-service.jpg";

const BistroExplain = () => {
  return (
    <div className="mt-16 relative">
      <img
        src={chef}
        alt="Chef Service"
        className="w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 bg-white bg-opacity-75 p-8 text-center flex flex-col space-y-4">
        <h1 className="font-cinzel text-4xl">Bistro Boss</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div>
    </div>
  );
};

export default BistroExplain;
