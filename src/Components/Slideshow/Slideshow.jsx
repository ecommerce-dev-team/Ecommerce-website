import React from "react";
import bannerImage from "../images/encyclopedia-أشهر-متاجر-ملابس-عالمية.jpg";
import deliveryImage from "../images/banner-box2.jpg.png";
import { Link } from "react-router-dom";

const Slideshow = () => {
  return (
    <div>
        {/* البانر الرئيسي */}
      <div
        className="w-full mt-5 h-[500px] bg-cover bg-center rounded-md flex items-center px-6 md:px-10"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="max-w-md space-y-3 bg-white/70 p-4 rounded-md md:bg-transparent md:p-0">
        <div className="flex gap-2">

          <p className="text-sm font-dosis text-black-200 tracking-wide uppercase">Exclusive offer</p>
          <span className="text-green-600  font-dosis text-sm bg-green-100 px-2 py-1 rounded-md ">
            -20% OFF
          </span>
        </div>

          <h1 className="text-2xl font-inter  md:text-4xl font-bold text-gray-800 leading-snug">
            Specialist in the <br />
            grocery store
          </h1>

          <p className="text-sm font-inter text-gray-600">Only this week. Don’t miss...</p>

          <p className="text-xl font-inter md:text-2xl ">from<span className="text-xl md:text-2xl font-dosis font-bold text-red-600">$7.99</span> </p>

          <Link
            to="/Shop"
            className="inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium transition"
          >
            Shop Now →
          </Link>
        </div>
      </div>

      {/* السيكشن اللي تحته */}
      <div className="bg-pink-50 flex flex-col md:flex-row justify-between items-center mt-10 p-6 rounded-md gap-4 md:gap-0">
        <p className="text-center md:text-left text-green-600 font-semibold">
          100% Secure delivery{" "}
          <span className="text-gray-600">without contacting the courier</span>
        </p>
        <img src={deliveryImage} alt="delivery" className="h-20 md:h-24" />
        <Link
          to="/Shop"
          className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium"
        >
          Shop Now
        </Link>
      </div>

      {/* عداد العروض */}
      <div className="flex justify-center gap-10 text-center mt-10 px-4">
        <div className="">
        <h2 className="text-blue-600 font-semibold font-inter text-lg md:text-xl">
          Special Offers of the week!
        </h2>
        <p className="text-gray-500 font-inter text-sm mt-1">
          Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.
        </p>
        </div>
        <div className="flex justify-center gap-3 mt-4 flex-wrap">
          <span className="bg-rose-500 text-white px-4 py-2 rounded text-sm">71</span>
          <span className="bg-rose-500 text-white px-4 py-2 rounded text-sm">14</span>
          <span className="bg-rose-500 text-white px-4 py-2 rounded text-sm">43</span>
          <span className="bg-rose-500 text-white px-4 py-2 rounded text-sm">16</span>
        </div>
      </div>
    </div>
  );
}

export default Slideshow;