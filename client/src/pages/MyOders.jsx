import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const MyOrders = () => {
  const [myOrders, setMyOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currency, axios, user } = useAppContext();

  const fetchMyOrders = async () => {
    try {
      const { data } = await axios.get('/api/order/user');
      console.log("API Response:", data);
      if (data.success) {
        setMyOrders(data.orders);
        console.log("My Orders:", data.orders);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    console.log("User in useEffect:", user);
    if (user) {
      fetchMyOrders();
    }
  }, [user]);

  console.log("Rendering myOrders:", myOrders);

  return (
    <div className="mt-16 pl-20">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My Orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full" />
      </div>

      {myOrders.map((order) => (
        <div
          key={order._id}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
            <span>OrderId: {order._id}</span>
            <span>Payment: {order.paymentType}</span>
            <span>
              Total Amount: {currency} {order.amount}
            </span>
          </p>

          {order.items.map((item, idx) =>
            item.product ? (
              <div
                key={item.product._id}
                className={`relative bg-white text-gray-500/70 
                  ${idx !== order.items.length - 1 && "border-b"} 
                  border-gray-300 flex flex-col md:flex-row md:items-center justify-between p-4 py-5 md:gap-16 w-full max-w-4xl`}
              >
                <div className="flex items-center mb-4 md:mb-0">
                  <div className="bg-primary/10 p-4 rounded-b-lg">
                    <img
                      src={item.product.image?.[0] || "/fallback.jpg"}
                      alt={item.product.name || "Product"}
                      className="w-16 h-16 object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h2 className="text-xl font-medium text-gray-800">
                      {item.product.name}
                    </h2>
                    <p>Category: {item.product.category}</p>
                  </div>
                </div>
                <div className="flex flex-col justify-center md:ml-8 mb-4 md:mb-0">
                  <p>Quantity: {item.quantity || 1}</p>
                  <p>Status: {order.status}</p>
                  <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                </div>
                <p className="text-primary text-lg font-medium">
                  Amount: {currency}{" "}
                  {item.product.offerPrice * (item.quantity || 1)}
                </p>
              </div>
            ) : (
              <div
                key={idx}
                className="p-4 border-b border-gray-200 text-red-500 italic"
              >
                ⚠️ Product details not available for this item.
              </div>
            )
          )}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
