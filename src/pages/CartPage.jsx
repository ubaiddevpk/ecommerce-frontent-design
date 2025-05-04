import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import payment from "../assets/icons/payment.png";
import free from "../assets/icons/free.png";
import customer from "../assets/icons/customer.png";
import Superdiscount from "../components/Discount/superdiscount";
import{Link } from "react-router-dom"
import cartIcon from "../assets/Mobile/Vector.png";


const CartPage = () => {
  const { cart, dispatch } = useCart();
  const [savedForLater, setSavedForLater] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const saveForLater = (item) => {
    removeItem(item.id);
    setSavedForLater((prev) => [...prev, item]);
  };

  const moveToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    setSavedForLater((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleRemoveAll = () => {
    cart.forEach((item) => removeItem(item.id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal - discount + tax;

  const handleApplyCoupon = () => {
    if (couponCode === "SAVE10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  return (
    <>
      <div className="lg:flex gap-8 w-[95%] p-4 mt-4 ml-10">
        {/* Cart Items */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">My cart ({cart.length})</h2>
          <div className="bg-white  rounded-xl shadow-sm p-4 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b border-gray-200 last:border-none pb-4"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded border border-gray-400 "
                  />
                  <div>
                    <h3 className="font-medium text-sm text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500">
                      Size: medium, Color: blue, Material: Plastic
                    </p>
                    <p className="text-xs text-gray-400">
                      Seller: Ariel Market
                    </p>
                    <div className="mt-2 flex gap-2">
                      <button
                        className=" text-red-600 border  rounded-[5px] border-gray-200 text-xs px-3 py-1  hover:bg-red-200"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove
                      </button>
                      <button
                        className="border border-gray-200 rounded-[5px] text-blue-600 text-xs px-3 py-1 hover:bg-blue-200"
                        onClick={() => saveForLater(item)}
                      >
                        Save for later
                      </button>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-sm font-semibold text-gray-800">
                    ${item.price.toFixed(2)}
                  </p>
                  <select className="border border-gray-300 text-xs p-1 mt-2 rounded-md">
                    {[...Array(10).keys()].map((n) => (
                      <option key={n + 1} value={n + 1}>
                        Qty: {n + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <div className="flex justify-between mt-4">
              <Link to="/Listpage"><button className="px-4 py-2 bg-blue-600 text-white font-bold border border-gray-200 text-sm rounded-[5px] hover:bg-blue-200">
                ← Back to shop
              </button></Link>
              <button
                onClick={handleRemoveAll}
                className="px-4 py-2 border border-gray-200 text-blue-600 text-sm font-bold rounded hover:bg-red-200"
              >
                Remove all
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row justify-between mt-6 gap-6">
            {/* Item 1 */}
            <div className="flex justify-center items-center gap-5">
              <span className="h-[50px] w-[50px] flex justify-center items-center bg-gray-200 rounded-full">
                <img src={customer} alt="img" className="w-[20px] h-[20px]" />
              </span>
              <div>
                <h1>Secure payment</h1>
                <span>Have you ever finally just</span>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex justify-center items-center gap-5">
              <span className="h-[50px] w-[50px] flex justify-center items-center bg-gray-200 rounded-full">
                <img src={free} alt="img" className="w-[20px] h-[20px]" />
              </span>
              <div>
                <h1>Secure payment</h1>
                <span>Have you ever finally just</span>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex justify-center items-center gap-5">
              <span className="h-[50px] w-[50px] flex justify-center items-center bg-gray-200 rounded-full">
                <img src={payment} alt="img" className="w-[20px] h-[20px]" />
              </span>
              <div>
                <h1>Secure payment</h1>
                <span>Have you ever finally just</span>
              </div>
            </div>
          </div>

          {/* Saved for Later Section */}
          {savedForLater.length > 0 && (
            <div className="mt-8 bg-white ">
              <h3 className="text-xl font-semibold mb-4">Saved for later</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {savedForLater.map((item) => (
                  <div key={item.id} className="  p-4 rounded bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 object-cover mb-2 "
                    />
                    <h4 className="font-medium text-sm">{item.title}</h4>
                    <p className="text-gray-600 text-sm">
                      ${item.price.toFixed(2)}
                    </p>
                     <span className="flex items-center justify-center w-[120px] gap-2 border mt-3 hover:cursor-pointer border-gray-400 rounded hover:bg-blue-200"> <img src={cartIcon} className="h-[25px] w-[20px]" alt="" /><button
                      className="mt-2 text-blue-500 text-sm   rounded"
                      onClick={() => moveToCart(item)}
                    >
                      Move to cart
                    </button>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar: Coupon + Checkout */}
        <div className="w-full max-w-sm flex flex-col mt-12 ">
          {/* Coupon Section */}
          <div className="bg-white  rounded-xl shadow-sm p-4 mb-6">
            <h3 className="text-sm font-medium text-gray-700 mb-2">
              Have a coupon?
            </h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Add coupon"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="border border-gray-300 px-3 py-2 text-sm rounded-l-md w-full focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
              <button
                onClick={handleApplyCoupon}
                className="bg-white border border-gray-300 hover:cursor-pointer text-blue-600 px-4 text-sm font-medium rounded-r-md"
              >
                Apply
              </button>
            </div>
          </div>

          {/* Checkout Section */}
          <div className="bg-white  rounded-xl shadow-sm p-5">
            <div className="text-sm text-gray-700 space-y-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Discount:</span>
                <span className="font-semibold">-${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Tax:</span>
                <span className="font-semibold">+${tax.toFixed(2)}</span>
              </div>
              <hr className="my-1" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="mt-6 w-full bg-green-500 text-white text-sm font-semibold py-3 rounded-lg hover:bg-green-600 transition">
              Checkout
            </button>

            <div className="mt-4 flex justify-center gap-2">
              <img
                src="https://img.icons8.com/color/48/amex.png"
                alt="Amex"
                className="w-8 h-6 object-contain"
              />
              <img
                src="https://img.icons8.com/color/48/mastercard-logo.png"
                alt="MasterCard"
                className="w-8 h-6 object-contain"
              />
              <img
                src="https://img.icons8.com/color/48/paypal.png"
                alt="PayPal"
                className="w-8 h-6 object-contain"
              />
              <img
                src="https://img.icons8.com/color/48/visa.png"
                alt="Visa"
                className="w-8 h-6 object-contain"
              />
              <img
                src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
                alt="Apple Pay"
                className="w-6 h-6 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <Superdiscount />
    </>
  );
};

export default CartPage;
