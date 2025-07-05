
import axios from "axios"
import { createContext } from "react"

import { useState } from "react";
import toast from "react-hot-toast";



export const WishListContext = createContext()

 let headers = {
    token: localStorage.getItem("token")
  };

export default function WishListProvider(props){

  const [wishlistItem,setWishlistItem]=useState([])
   const [allwishListItems,setAllWishList]=useState([])

   async function addToWishlist(productId){
         return await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,{ productId },{
          headers
        }
      ).then((respons)=>{
            toast.success(respons.data.message);
            setWishlistItem(respons.data.data)
            console.log(respons.data.data)
         }).catch((error)=>{
            toast.error(error.response?.data?.message);
         })
    }

    async function removeFromWishlist(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
          headers
        },
        )
      .then((respons) => {
        toast.success(respons.data.message);
        setWishlistItem(respons.data.data)
        console.log(respons.data.data)
      })
      .catch((error) => {
        toast.error(error.response?.data?.message);
      });
  }



  async function getAllWishlistItem() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`, { 
      headers
    })
      .then((response) => {
        const productIds = response?.data.data.map(item => item.id);
        setWishlistItem(productIds); 
        setAllWishList(response.data.data)
        return response;
      })
      .catch((error) => {
        return error;
      });
  }

    return(
        <WishListContext.Provider value={{ addToWishlist,removeFromWishlist,wishlistItem,getAllWishlistItem ,allwishListItems}}>
            {props.children}
        </WishListContext.Provider>
    )
}