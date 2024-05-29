import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../CustomHook/useAuth";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import useCart from "../../CustomHook/useCart";

const CheckOutForm = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const navigate = useNavigate();
  const elements = useElements();
  const [error, setError] = useState("");
  const [cart, refetch, isLoading] = useCart();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const [axiosSecure] = useAxiosSecure();
  const totalPrise = cart.reduce((total, curr) => total + curr.price, 0);

  useEffect(() => {
    if (totalPrise > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrise })
        .then((res) => setClientSecret(res?.data?.clientSecret));
    }
  }, [axiosSecure, totalPrise]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("stripe error", error);
      setError(error.message);
    } else {
      setError("");
      console.log("payment Method", paymentMethod);
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: card,
            billing_details: {
              name: user?.name,
              email: user?.email,
            },
          },
        });
      if (confirmError) {
        console.log("confirm error", confirmError);
        setTransactionId("");
      } else {
        console.log("payment intent", paymentIntent);
        if (paymentIntent.status === "succeeded") {
          setTransactionId(`Transaction id : ${paymentMethod.id}`);
          const paymentInfo = {
            name: user.displayName,
            email: user.email,
            price: totalPrise,
            data: new Date().toDateString(),
            transactionId: paymentIntent.id,
            cardsId: cart.map((item) => item._id),
            menuId: cart.map((item) => item.menuId),
            status: "pending",
          };
          axiosSecure.post("/payment", paymentInfo).then((res) => {
            console.log(res.data.deleteCart);
            if (res?.data?.payments?.insertedId) {
              refetch();
              navigate("/dashboard/payment-details");
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Payment was Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      }
    }
  };
  return (
    <div className="w-[85%] mt-4 mx-auto text-white bg-white bg-opacity-10 p-12 rounded">
      <form className="" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "gray",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-blue-700 mt-2 px-4 py-1 rounded"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </form>
      <p className="text-sm text-red-700">{error}</p>
      {/* <p className="text-sm text-green-700">{transactionId}</p> */}
    </div>
  );
};

export default CheckOutForm;
