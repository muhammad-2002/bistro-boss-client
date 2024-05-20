import React from "react";
import BistroExplain from "../Components/BistroExplain/BistroExplain";
import Carosel from "../Components/Carosel/Carosel";
import Checkout from "../Components/Checkout/Checkout";
import Contract from "../Components/Contract/Contract";
import CustomerReview from "../Components/CustomerReview/CustomerReview";
import OnlineOrder from "../Components/OnlineOrder/OnlineOrder";
import OrderSlide from "../Components/OnlineOrder/OrderSlide";
import OurMenu from "../Components/Shared/OurMenu";
import Recommends from "../Components/Shared/Recommendas";

const Home = () => {
  return (
    <div>
      <div className="h-screen">
        <Carosel></Carosel>
      </div>
      <div className="mt-36  w-[85%] flex flex-col space-y-5 justify-center mx-auto   ">
        <OnlineOrder></OnlineOrder>

        <OrderSlide></OrderSlide>
        <div className="">
          <BistroExplain> </BistroExplain>
          <OurMenu></OurMenu>
          <Contract></Contract>
          <Recommends></Recommends>
          <Checkout></Checkout>
          <CustomerReview></CustomerReview>
        </div>
      </div>
    </div>
  );
};

export default Home;
