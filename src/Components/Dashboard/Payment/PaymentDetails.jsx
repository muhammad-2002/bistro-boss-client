import React, { useEffect, useState } from "react";
import useAuth from "../../CustomHook/useAuth";
import useAxiosSecure from "../../CustomHook/useAxiosSecure";
import HeadingComp from "../../Shared/HeadingComp";

const PaymentDetails = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    axiosSecure
      .get(`/payment-details/${user.email}`)
      .then((res) => setItems(res.data));
  }, []);
  return (
    <div className="min-h-screen mt-5 text-white">
      <HeadingComp
        heading={"At a Glance!"}
        titleHeading={"PAYMENT HISTORY"}
      ></HeadingComp>
      <div className="w-[85%] mx-auto p-10  bg-white bg-opacity-10 mt-5 rounded">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th>SL</th>
                <th>Email</th>
                <th>Payment Date</th>
                <th>Total prise</th>
                <th> Transaction Id</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">{item.email}</div>
                  </td>
                  <td>{item.data}</td>
                  <td>{item.price}</td>
                  <th>{item.transactionId}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
