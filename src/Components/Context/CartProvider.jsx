import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const tokenValue = localStorage.getItem("token");
  const [cartItems, setCartItems] = useState([]);
  const [response, setResponse] = useState({});
  const[cartId,setCartId]=useState()
  const getCartItems = async () => {
    if (!tokenValue) {
      return;
    }

    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: tokenValue,
          },
        }
      );
      setCartId(response?.data?.cartId)
      setCartItems(response?.data?.data?.products);
      setResponse(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetchCartItems = async () => {
      await getCartItems();
    };
    fetchCartItems();
  }, []);

  const addToCart = async (productId) => {
    if (!tokenValue) return;
    try {
      const response = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId,
        },
        {
          headers: { token: tokenValue },
        }
      );
       toast.success(response.data.message);;
      await getCartItems();
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };
  const removeFromCart = async (productId) => {
    if (!tokenValue) return;
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          headers: { token: tokenValue },
        }
      );
      toast.success(response.data.message);
      await getCartItems();
    } catch (err) {
     toast.error(err.response?.data.message);
    }
  };

  const updateItemQuantity = async (productId, newCount) => {
    if (newCount < 1) {
      await removeFromCart(productId);
    } else {
      const response = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
        {
          count: newCount,
        },
        {
          headers: { token: tokenValue },
        }
      );
    }
    await getCartItems();
  };
  async function onlinePayment(shippingAddress) {
       
        return await axios.post(
                `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=https://github.com/ecommerce-dev-team/Ecommerce-website.git`,
                { shippingAddress },
                { headers:{token:tokenValue} }
            )
            .then((response) => {
                return response;
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || "Payment failed");
                return error;
            });
    }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        response,
        cartId,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        onlinePayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
