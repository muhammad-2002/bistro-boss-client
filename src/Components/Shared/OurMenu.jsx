import React from "react";
import useMenu from "../useMenu/useMenu";
import HeadingComp from "./HeadingComp";
import MenuCard from "./MenuCard";

const OurMenu = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(() => {
  //   fetch("menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const popularMenu = data.filter((item) => item.category === "popular");
  //       setMenu(popularMenu);
  //     });
  // }, []);
  const [data] = useMenu("menu.json");
  const popular = data.filter((item) => item.category === "popular");
  return (
    <div className="mt-20">
      <HeadingComp
        heading={"Check it out"}
        titleHeading={"FROM OUR MENU"}
      ></HeadingComp>

      <div className="grid grid-cols-1 gap-4 mt-7 md:grid-cols-2">
        {popular.map((item) => (
          <MenuCard item={item} key={item._id}></MenuCard>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn  bg-white uppercase border-b-4 btn-outline border-0 border-solid borer-[#1F2937]">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default OurMenu;
