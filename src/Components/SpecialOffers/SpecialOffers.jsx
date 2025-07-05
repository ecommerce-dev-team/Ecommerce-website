import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Countdown, { zeroPad } from 'react-countdown';
import Loader from "../Loader/Loader";
// import { WishListContext } from "../../Context/WishlistContext";
// import { useContext, useEffect } from "react";



function SpecialOffers() {

  const queryClient = useQueryClient()

    const { data, isLoading, isError, error }= useQuery({ 
    queryKey: ['product'],
    queryFn:  getProduct ,
 })

 function getProduct(){
   return  axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=5`)
 }


  const DaysInMs =Date.now() + 8* 24 * 60 * 60 * 1000;

  const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    return <span>Stay tuned for next week's offers!</span>;
  } else {
    return (
        <div className="">
          <div className="flex justify-center gap-x-4">
            <div className="bg-[#ED174A] p-3 rounded-md text-white">
              <span className="text-2xl font-semibold font-[Dosis]">{zeroPad(days)}</span>
            </div>
            <span className="text-2xl flex items-center ">:</span>
            <div className="bg-[#ED174A] p-3 rounded-md text-white">
              <span className="text-2xl font-semibold font-[Dosis]">{zeroPad(hours)}</span>
            </div>
            <span className="text-2xl flex items-center ">:</span>
            <div className="bg-[#ED174A] p-3 rounded-md text-white">
              <span className="text-2xl font-semibold font-[Dosis]">{ zeroPad(minutes)}</span>
            </div>
            <span className="text-2xl flex items-center ">:</span>
            <div className="bg-[#ED174A] p-3 rounded-md text-white">
              <span className="text-2xl font-semibold font-[Dosis]">{zeroPad(seconds)}</span>
            </div>
          </div>
        </div>
    )
  }
};


  return(
  <>
  {isError?error:""}
  {isLoading?<Loader/>:
        <div className="py-10 font-[Inter]">
          <div className="md:flex pb-10 md:justify-center md:gap-8">
            <div className="pb-4 text-center md:pb-0 md:text-start">
              <h3 className="text-[#233A95] font-semibold text-2xl md:text-right">Special Offers of the week!</h3>
              <p className="text-[#9B9BB4] ">Ut placerat, magna quis porttitor vulputate, magna nunc auctor ante.</p>
            </div>
            <Countdown
                date={DaysInMs}
                renderer={renderer}
                zeroPadTime={2}
                daysInHours={false}
                 />
          </div>
          <div className="border-2 border-[#ED174A] grid  grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
      
      {data?.data?.data.map((item) => (
            <div key={item.id} className="border-r border-[#EDEEF5] p-4 text-center flex flex-col gap-1">
              <div className="relative">
                <img src={item.imageCover} alt={item.title} className="w-50" loading="lazy" />
                <span className="bg-[#35AFA0] text-white rounded-sm p-1 absolute top-0 left-0">25%</span>
              </div>
              <p className="text-[#202435] font-medium">{item.title}</p>
              <p className="text-[#00B853] font-[Dosis] font-semibold text-xs uppercase">in stock</p>
              <div className="flex justify-center">
              <span className="pr-2">
                <i className="fa-solid fa-star starIcon"></i>
                <i className="fa-solid fa-star starIcon"></i>
                <i className="fa-solid fa-star starIcon"></i>
                <i className="fa-solid fa-star starIcon"></i>
               {item.ratingsAverage>=4.5?
                <i className="fa-solid fa-star starIcon"></i>:<i className="fa-regular fa-star starIcon"></i>}
              </span>
              <span className="text-[#71778E] font-[Dosis] font-semibold text-sm">1 review</span>
              </div>
              <p className="text-[#D51243] font-[Dosis] font-semibold text-lg">$ {item.price }</p>
                   <div className="bg-[#EDEEF5] h-1 w-full rounded-xl">
                  <div className='bg-[#9B9BB4] h-1 rounded-xl' style={{ width: `${(item.quantity /300) * 100}%` }}></div>
               </div>
              <p className="text-[11px]  text-[#202435]">the available products: <span className="ms-1 font-semibold text-xl text-[#233A95]">{item.quantity}</span></p>
            </div>
          ))}
  </div>

            </div>
  }
  
  </>
  )
}

export default SpecialOffers;
