import React from "react";

const RecommendCard = ({ item }) => {
  const { image } = item;
  return (
    <div className="card bg-base-100 rounded-none shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body bg-[#F3F3F3]">
        <h2 className="card-title justify-center">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-action flex  justify-center">
          <button className="btn bg-[#E8E8E8] border-[#BB8506]  text-[#BB8506] border-b-2 border-0">
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendCard;
