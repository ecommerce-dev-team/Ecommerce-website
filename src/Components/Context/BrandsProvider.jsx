import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const BrandsContext = createContext(null);

const BrandsProvider = ({ children }) => {
  const [brands, setBrands] = useState([]);
  const [selectedBrandId, setSelectedBrandId] = useState(null);

  const getBrands = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/brands"
      );
      setBrands(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const callAllBrands = async () => {
      await getBrands();
    };
    callAllBrands();
  }, []);
  return (
    <BrandsContext.Provider
      value={{ brands, selectedBrandId, setSelectedBrandId }}
    >
      {children}
    </BrandsContext.Provider>
  );
};

export default BrandsProvider;
