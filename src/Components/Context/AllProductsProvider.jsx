// src/Context/AllProductsProvider.js
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AllProductsContext = createContext(null);

const AllProductsProvider = ({ children }) => {
  const [fullResponseProducts, setFullResponseProducts] = useState({});

  const [products, setProducts] = useState([]);
  const [metadata, setMetadata] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const getAllProducts = async (page = 1) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/products?page=${page}`
      );
      setFullResponseProducts(response?.data);
      setProducts(response.data.data);
      setMetadata(response.data.metadata);
    } catch (err) {
      console.error("Failed to fetch products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts(currentPage);
  }, [currentPage]);

  return (
    <AllProductsContext.Provider
      value={{
        products,
        metadata,
        currentPage,
        setCurrentPage,
        loading,
        fullResponseProducts,
      }}
    >
      {children}
    </AllProductsContext.Provider>
  );
};

export default AllProductsProvider;
