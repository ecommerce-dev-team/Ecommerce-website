import "swiper/css";
import "swiper/css/navigation";

import axios from "axios";
import { FaSpinner } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { PRODUCTS } from "../../constant/constants";

import { QueryClient, useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import { NavLink } from "react-router-dom";

const fetchProductsData = async () => {
  const response = await axios.get(`${PRODUCTS.GET_ALL}?limit=20`);
  return response.data;
};

const FeaturedProducts = () => {
  const { addToCart } = useContext(CartContext);
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProductsData,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-60 text-gray-600">
        <FaSpinner className="w-8 h-8 animate-spin mr-2" />
        <span>Loading products...</span>
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center h-60 text-red-600 font-semibold">
        <p>Failed to load products. Please try again later.</p>
      </div>
    );
  const products = Array.isArray(data?.data) ? data.data : [];

  return (
    <div className="max-w-screen-xl mx-auto px-5 py-10 relative FeaturedProducts">
      {/* أزرار التنقل المخصصة */}
      <div className="swiper-button-prev custom-swiper-button"></div>
      <div className="swiper-button-next custom-swiper-button"></div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="mySwiper"
      >
        {products.map((product) => (
          <SwiperSlide
            key={product.id}
            className="bg-white mb-10 h-[95%] rounded-xl border border-[#EDEEF5] p-4 shadow hover:shadow-lg transition"
          >
            <div className="mb-3 relative h-[290px]">
              <div className="absolute top-[1px] left-3 bg-[#35AFA0] text-[14px] p-1 rounded-[6px] text-white">
                {10}%
              </div>
              <NavLink to={`/productDetails/${product._id}`}>
                <img
                  src={product.imageCover}
                  alt={product.title}
                  className="mx-auto h-24 mb-3 object-contain"
                />
              </NavLink>
              <div className="title">
                <h3 className="font-semibold text-sm text-gray-800">
                  {product.title}
                </h3>
                {product.brand && (
                  <p className="text-xs text-gray-500">
                    {product.category?.name}
                  </p>
                )}
              </div>

              <p className="text-xs text-green-600 font-medium mt-1">
                {product.quantity ? "IN STOCK" : "OUT OF STOCK"}
              </p>
              <div className="review flex items-center mt-2 gap-3">
                <p className="text-yellow-500 text-sm">
                  {"★".repeat(product.ratingsAverage)}
                </p>
                <p>{product.ratingsQuantity} review</p>
              </div>

              <div className="absolute bottom-[-20px] w-full mb-2 ">
                <div className="flex items-center mt-5 mb-5 gap-3">
                  <p className="text-sm text-gray-400 line-through">
                    ${(product.price * 2).toFixed(2)}
                  </p>
                  <p className="text-lg font-bold text-red-500">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
                <div
                  className="text-center
                "
                >
                  <button
                    onClick={() => addToCart(product._id)}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black py-1 px-4 rounded-full text-sm"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturedProducts;
