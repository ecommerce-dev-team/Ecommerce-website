import { createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { TbSettingsDollar } from "react-icons/tb";
import { useQuery } from "@tanstack/react-query";

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext();

function Shopcontextprovider(props) {
  //  get products from api
  async function getproducts() {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/products"
      );
      return response;
    } catch (error) {
      toast(error.message);
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getproducts,
  });

  const products = data ? data.data : null;

  const contextvalue = { products, isLoading };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default Shopcontextprovider;
