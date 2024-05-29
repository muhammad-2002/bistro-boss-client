import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import HeadingComp from "./../../Shared/HeadingComp";
import CheckOutForm from "./CheckOutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRYPE_API_KEY);

const Payment = () => {
  //   if (isLoading || loading) {
  //     return <p>Loading</p>;
  //   }
  return (
    <div className="p-6 min-h-screen">
      <HeadingComp
        heading={"please pay to eat"}
        titleHeading={"PAYMENT"}
      ></HeadingComp>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
