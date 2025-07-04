import { useContext } from "react";
import { CartContext } from "../Context/CartProvider";
import ProductRating from "./ProductRating";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { AllCategoriesContext } from "../Context/AllCategoriesProvider";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateItemQuantity } = useContext(CartContext);
  const sortedCartItems = [...cartItems].sort((a, b) =>
    a.product.title.localeCompare(b.product.title)
  );

  return (
    <div className="wholeCart flex flex-wrap justify-start items-center ">
      {sortedCartItems.length ? (
        sortedCartItems.map((item) => (
          <div
            className="cartItem border border-[#EDEEF5] w-[213px] h-[395px] flex flex-col justify-center items-start  rounded-[8px] py-6 px-5"
            key={item._id}
          >
            <NavLink to={`/productDetails/${item.product._id}`}>
              <img
                src={item.product.imageCover}
                alt="cart img"
                className="w-[130px] m-auto "
              />
            </NavLink>
            <p className="font-[500]  text-[#202435] ">{item.product.title}</p>
            <p
              className={`text-[#00B853] font-[500] ${
                !item.product.quantity ? "line-through text-red-700" : ""
              }`}
            >
              IN STOCK
            </p>
            <div className="flex justify-center items-center gap-1">
              <ProductRating averageRating={item.product.ratingsAverage} />{" "}
              <p className=" text-[#71778E] ">reviews</p>
            </div>
            <p className="text-[#D51243] font-bold text-[18px] tracking-tight">
              ${item.price}
            </p>
            <div className="flex justify-between items-center w-full border  rounded-tl-2xl rounded-bl-2xl rounded-tr-2xl rounded-br-2xl border-[#EDEEF5] mt-3">
              <div
                className="bg-[#EDEEF5] w-8 h-8 grid place-content-center rounded-tl-2xl rounded-bl-2xl cursor-pointer"
                onClick={() =>
                  updateItemQuantity(item.product._id, item.count - 1)
                }
              >
                <FiMinus />
              </div>
              <p>{item.count}</p>
              <div
                className="bg-[#FFCD00] w-8 h-8  grid place-content-center rounded-tr-2xl rounded-br-2xl cursor-pointer "
                onClick={() =>
                  updateItemQuantity(item.product._id, item.count + 1)
                }
              >
                {" "}
                <FiPlus />
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="my-10 m-auto text-3xl font-semibold text-[#35AFA0]">
          No Items i cart yet
        </p>
      )}
    </div>
  );
};

export default Cart;
