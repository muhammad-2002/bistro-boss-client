import React from "react";
import Cover from "../Components/Shared/Cover";
import HeadingComp from "../Components/Shared/HeadingComp";
import MenuCategory from "../Components/Shared/MenuCategory";
import useMenu from "../Components/useMenu/useMenu";
import bannerMenu from "../assets/menu/banner3.jpg";
import bannerDessert from "../assets/menu/dessert-bg.jpeg";
import bannerPizza from "../assets/menu/pizza-bg.jpg";
import bannerSalad from "../assets/menu/salad-bg.jpg";
import bannerSoup from "../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  const [data] = useMenu("menu.json");
  const offered = data.filter((item) => item.category === "offered");
  const dessert = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const pizza = data.filter((item) => item.category === "pizza");
  const salad = data.filter((item) => item.category === "salad");
  return (
    <div>
      <Cover
        img={bannerMenu}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
        height={"h-screen"}
      ></Cover>
      <div className="my-10">
        <HeadingComp
          heading={"Do'nt miss"}
          titleHeading={"TODAY'S OFFER"}
        ></HeadingComp>
        <MenuCategory
          items={offered}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
          category="offered"
        ></MenuCategory>
      </div>
      <div className="my-14">
        <Cover
          img={bannerDessert}
          height={"h-[400px]"}
          heading={"DESSERTS"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <MenuCategory
          items={dessert}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
          category="dessert"
        ></MenuCategory>
      </div>
      <div className="my-14">
        <Cover
          img={bannerPizza}
          height={"h-[400px]"}
          heading={"PIZZA"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <MenuCategory
          items={pizza}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
          category="pizza"
        ></MenuCategory>
      </div>
      <div className="my-14">
        <Cover
          img={bannerSalad}
          height={"h-[400px]"}
          heading={"SALADS"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <MenuCategory
          items={salad}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
          category="salad"
        ></MenuCategory>
      </div>
      <div className="my-14">
        <Cover
          img={bannerSoup}
          height={"h-[400px]"}
          heading={"SOUPS"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        ></Cover>
        <MenuCategory
          items={soup}
          btnText={"ORDER YOUR FAVOURITE FOOD"}
          category="soup"
        ></MenuCategory>
      </div>
    </div>
  );
};

export default OurMenu;
