import React, { useEffect, useState } from "react";
import HeadingComp from "./HeadingComp";
import RecommendCard from "./Recommends";

const Recommends = () => {
  const [recommends, setRecommends] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const soup = data.filter((item) => item.category === "soup");
        setRecommends(soup);
      });
  }, []);
  return (
    <div className="mt-16">
      <HeadingComp
        heading={"Should Try"}
        titleHeading={"CHEF RECOMMENDS"}
      ></HeadingComp>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommends.map((item) => (
          <RecommendCard item={item} key={item._id}></RecommendCard>
        ))}
      </div>
    </div>
  );
};

export default Recommends;
