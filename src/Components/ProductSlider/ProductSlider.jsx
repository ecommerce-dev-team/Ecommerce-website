import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useSelector } from 'react-redux';





export default function ProductSlider() {

  const {products,isloading,error} = useSelector((state)=>state.product);
 

  
  
  

  return (
    <div className='productslider'>
      <div>
        {
          error &&
          (
               <button className='bg-red-400 h-12 w-full text-2xl '>Faild to fetch</button>

          )
       
        }

      </div>

      {
        isloading ? <p className='text-bold text-xl'>loading ... </p>  :
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
         products &&
          products.map((item,index)=>{
            return(
             <SwiperSlide key={index} >
                  <div className='flex justify-center border-1 border-[#E4E5EE] p-2'>
                      <div className='w-[234px] h-[241px]  flex flex-col items-center justify-center gap-3 '>
                          <img src={item.images[0]} className='w-[145px] h-[145px]' alt='product-image'></img>
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
