
import { useContext, useEffect, useState } from 'react'
import { WishListContext } from './../Context/WishlistContext';
import { CartContext } from '../Context/CartProvider';
import Loader from './../Loader/Loader';


export default function WishList() {

 const[isLoading,setisLoading]=useState(true) 

  let{removeFromWishlist,getAllWishlistItem,allwishListItems} =useContext(WishListContext)
  let {addToCart}=useContext(CartContext)


 useEffect(()=>{
  getWishlist()
},[])

 async function getWishlist() {
    await  getAllWishlistItem()
    setisLoading(false)
 }


   async function deleteFromWishList(id){
     await removeFromWishlist(id)
     await getAllWishlistItem()
     
  }

  async function addProductToCart(productId){
     await addToCart(productId)
 }
  
  return (
    <>
    {isLoading?<Loader/>:
    <div className="pb-10 text-[Dosis]">
      <div className='container mx-auto xl:px-50 px-10 '>
   
       <div className="py-6 ">
           <h2 className='text-2xl font-bold font-[Dosis]'>Wish List :</h2>
       </div>
     
     <table className="w-full ">
     <tbody>
                   {allwishListItems.length === 0 ? (
                     <tr>
                       <td colSpan="6" className="py-4 text-center">No items in the Wishlist</td>
                     </tr>
                   ) : (
                    allwishListItems.map((item) => (
                       <tr key={item.id} className="bg-white py-5 mb-5">
                         <td className="py-2 ps-3">
                           <img className=" mx-auto" src={item.imageCover} width="100" alt="Product" />
                         </td>
                         <td>
                           <p className="font-bold text-sm md:text-xl">{item.title?.split(" ").slice(0,5).join(" ")}</p>
                           <p className='text-[#35AFA0] text-xl font-semibold py-1 font-[Dosis]'>$ {item.price}</p>
                           <i onClick={()=>{deleteFromWishList(item.id)}} className="fa fa-trash mb-1 text-red-500 cursor-pointer"></i>
                         </td>
                         <td>
                         <div  onClick={()=>addProductToCart(item.id)} className="bg-[#35AFA0] text-white text-xl md:px-8 py-3 text-center cursor-pointer me-5">
                             Add To Cart
                         </div>
                         </td>
                       </tr>
                     ))
                   )}
                 </tbody>

   </table>

   </div>
   </div>
    }
   </>
  )
}