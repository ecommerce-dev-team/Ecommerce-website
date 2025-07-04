import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import ProductRating from "../CartPage/ProductRating";
import { CartContext } from "../Context/CartProvider";
import { FiShoppingCart } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { RiShareForwardLine } from "react-icons/ri";
import { AllProductsContext } from "../Context/AllProductsProvider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [displayedItem, setDisplayedItem] = useState({});
  const [selectedImg, setSelectedImg] = useState("");
  const { addToCart } = useContext(CartContext);
  const { products } = useContext(AllProductsContext);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        setDisplayedItem(response?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItems();
  }, [id]);

  const images = displayedItem?.images || [];
  const relatedProducts = products.filter(
    (item) => item.category._id === displayedItem?.category?._id
  );

  const sliderSettings = {
    dots: true,
    customPaging: (i) => (
      <div className="w-3 h-3 bg-[#35AFA0] rounded-full mx-1"></div>
    ),
    appendDots: (dots) => (
      <div style={{ bottom: "-25px" }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6">
      {/* Product Section */}
      <div className="flex flex-wrap justify-evenly gap-5 my-10">
        {/* Thumbnails */}
        <div className="firstColumn">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`w-[80px] rounded-[7px] mb-3 shadow-sm cursor-pointer ${
                selectedImg === img ? "border border-[#35AFA0]" : ""
              }`}
              alt="product"
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>

        {/* Main Image */}
        <div className="secondCol">
          <img
            className="w-[400px] rounded-2xl"
            src={selectedImg || displayedItem?.imageCover}
            alt="product"
          />
        </div>

        {/* Details */}
        <div className="thirdCol ml-2 flex flex-col gap-4 max-w-[400px]">
          <h1 className="font-medium text-2xl">{displayedItem.title}</h1>
          <p className="font-bold text-[22px]">{displayedItem.price}$</p>
          <ProductRating averageRating={displayedItem.ratingsAverage} />

          <div
            className="bg-[#35AFA0] text-white flex justify-center items-center gap-2.5 py-2 px-[80px] rounded-[5px] cursor-pointer"
            onClick={() => addToCart(displayedItem._id)}
          >
            <FiShoppingCart />
            <p>Add to Cart</p>
          </div>

          <div className="flex w-full items-center gap-2">
            <div className="grow rounded-[4px] py-2.5 border border-[#DEE5EA] flex justify-center items-center gap-2 font-semibold cursor-pointer">
              <GoHeart />
              <span>Wishlist</span>
            </div>
            <div className="grow rounded-[4px] py-2.5 border border-[#DEE5EA] flex justify-center items-center gap-2 font-semibold cursor-pointer">
              <RiShareForwardLine className="text-2xl" />
              <span>Share</span>
            </div>
          </div>

          <div>
            <h1 className="font-semibold text-2xl mb-2">Product Details:</h1>
            <p className="text-sm text-[#595959] leading-[25px]">
              {displayedItem.description}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      <div className="relatedItems my-14 mx-auto max-w-[1200px]">
        <h1 className="font-semibold text-[22px] mb-5">Related Products</h1>
        {relatedProducts.length ? (
          <Slider {...sliderSettings}>
            {relatedProducts.map((item) => (
              <div
                key={item._id}
                className="productItem p-4 max-w-[250px] mx-auto shadow-md rounded-md flex flex-col gap-2"
              >
                <NavLink to={`/productDetails/${item._id}`}>
                  <img
                    src={item.imageCover}
                    className="w-[180px] h-[180px] object-contain m-auto rounded-lg"
                    alt="product"
                  />
                </NavLink>
                <p className="font-semibold text-center">${item.price}</p>
                <p className="text-[#595959] text-sm text-center line-clamp-2">
                  {item.description}
                </p>
              </div>
            ))}
          </Slider>
        ) : (
          <p className="my-5 text-2xl text-[#35AFA0] ml-5">
            No Related Products
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
