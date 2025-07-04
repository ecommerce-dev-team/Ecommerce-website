import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const AllCategoriesContext = createContext(null);
const AllCategoriesProvider = ({ children }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );

      setAllCategories(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchCategories = async () => {
      await getAllCategories();
    };
    fetchCategories();
  }, []);

  return (
    <AllCategoriesContext.Provider
      value={{ allCategories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </AllCategoriesContext.Provider>
  );
};

export default AllCategoriesProvider;
