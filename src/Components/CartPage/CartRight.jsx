import { useContext } from "react";
import Cart from "./Cart";
import { CartContext } from "../Context/CartProvider";
const CartRight = () => {
  const { response } = useContext(CartContext);
  return (
    <div className="cartRight px-4 rounded-[6px] flex flex-col gap-5">
      <div className="bg-[#F7F8FD] h-14 rounded-xl flex justify-between items-center gap-4 p-7 text-[#9B9BB4]">
        <div className="whitespace-nowrap">
          {response.numOfCartItems != 1 ? (
            <span>{response.numOfCartItems} products</span>
          ) : (
            <span>{response.numOfCartItems} product</span>
          )}
        </div>
        <div className="whitespace-nowrap">
          Sort by: <span className="text-black">Alphabetically, A-Z</span>
        </div>
      </div>
      <Cart />
    </div>
  );
};

export default CartRight;
