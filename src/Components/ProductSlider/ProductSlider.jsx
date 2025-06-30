import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext } from 'react';
import { ShopContext } from '../Context/Context';
import { RotatingLines } from "react-loader-spinner";



export default function ProductSlider() {

  const {products,isLoading}=useContext(ShopContext);

 

  return (
    <div className='productslider'>
    
      {
        isLoading ?
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
          :
     <Swiper
     
          breakpoints={{
        380:{
                       slidesPerView: 1,

            },
        576: {
  
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        960:{
                  slidesPerView: 4,
        },
        1250:{
              slidesPerView: 5,

        }

      }}
 
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={0}
      slidesPerView={5}
      navigation
   
    >
     
        {
          Array.isArray(products) &&
            products.map((item, index)=>{
              return(
              <SwiperSlide key={index} >
                    <div className='flex justify-center border-1 border-[#E4E5EE] p-4'>
                        <div className='w-[234px] h-[241px]  flex flex-col items-center justify-center gap-3 '>
                            <img src={item.images[0]} className='w-[145px] h-[145px] hover:scale-105' alt='product-image'></img>
                            <p className='font-bold'>{item.title}</p>
                            <p>{item.quantity} items</p>
                        </div>
                  </div>
                </SwiperSlide>
            )

          })

        }
      
     </Swiper>
}
   
  
    </div>

  )
}
