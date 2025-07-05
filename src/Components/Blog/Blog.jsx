import { Link } from "react-router";
import img_1 from"../../assets/blog-3.png"
import img_2 from"../../assets/blog-5.png"
import img_3 from"../../assets/blog1.png"
import img_4 from"../../assets/sidebar-banner.png"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';




function Blog() {

   const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <>
       <section>
        <div className="container mx-auto p-5 xl:px-50 2xl:px-90 font-[Inter]">
          <div className="md:grid grid-cols-3 gap-5">
            <div className="col-span-2">
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper w-full h-full mb-14"
      >
        <SwiperSlide>
          <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-7">
                <img loading="lazy" src={img_1} alt=" blog image 1" className="w-full rounded-md" />
                <div className="flex flex-col gap-2.5">
                <span className="text-[#9B9BB4] font-semibold tracking-[-0.1px] text-sm uppercase font-[Dosis] ">Grocery</span>
                <h3 className=" text-[#202435]  font-semibold text-4xl  leading-[43.2px] tracking-[0]">But I must explain to you how all this mistaken idea</h3>
                <p className=" font-medium text-sm"><span className="text-[#71778E]">Jan 13 2025</span><span className="text-[#202435] ps-2.5">Sinan ISIK</span></p>
                <p className="text-[#202435] font-normal text-sm leading-7">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...</p>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <img loading="lazy" src={img_2} alt=" blog image 1" className="w-full rounded-md" />
                <div className="flex flex-col gap-2.5">
                <span className="text-[#9B9BB4] font-semibold tracking-[-0.1px] text-sm uppercase font-[Dosis] ">Grocery</span>
                <h3 className=" text-[#202435]  font-semibold text-4xl  leading-[43.2px] tracking-[0]">The Problem With Typefaces on the Web</h3>
                <p className=" font-medium text-sm"><span className="text-[#71778E]">Jan 13 2025</span><span className="text-[#202435] ps-2.5">Sinan ISIK</span></p>
                <p className="text-[#202435] font-normal text-sm leading-7">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...</p>
                </div>
              </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col gap-14">
              <div className="flex flex-col gap-7">
                <img loading="lazy" src={img_1} alt=" blog image 1" className="w-full rounded-md" />
                <div className="flex flex-col gap-2.5">
                <span className="text-[#9B9BB4] font-semibold tracking-[-0.1px] text-sm uppercase font-[Dosis] ">Grocery</span>
                <h3 className=" text-[#202435]  font-semibold text-4xl  leading-[43.2px] tracking-[0]">But I must explain to you how all this mistaken idea</h3>
                <p className=" font-medium text-sm"><span className="text-[#71778E]">Jan 13 2025</span><span className="text-[#202435] ps-2.5">Sinan ISIK</span></p>
                <p className="text-[#202435] font-normal text-sm leading-7">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...</p>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <img loading="lazy" src={img_2} alt=" blog image 1" className="w-full rounded-md" />
                <div className="flex flex-col gap-2.5">
                <span className="text-[#9B9BB4] font-semibold tracking-[-0.1px] text-sm uppercase font-[Dosis] ">Grocery</span>
                <h3 className=" text-[#202435]  font-semibold text-4xl  leading-[43.2px] tracking-[0]">The Problem With Typefaces on the Web</h3>
                <p className=" font-medium text-sm"><span className="text-[#71778E]">Jan 13 2025</span><span className="text-[#202435] ps-2.5">Sinan ISIK</span></p>
                <p className="text-[#202435] font-normal text-sm leading-7">Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed convallis ultricies, ante eros laoreet libero, vitae suscipit lorem turpis sit amet lectus. Quisque egestas lorem ut mauris ultrices,...</p>
                </div>
              </div>
          
          </div>
        </SwiperSlide>
      </Swiper>

          </div>

          <div>
            <div className="grid gap-12 px-3">
                <div className="flex flex-col gap-5">
                  <h4 className="side_title">Recent Posts</h4>
                  <div className="border-[#EDEEF5] border rounded-lg grid gap-9 p-5">
                    <div className="flex ">
                      <div className="shrink-0 pr-2 relative">
                        <img loading="lazy" src={img_1} alt="post image" className="rounded-full h-15 w-15" />
                        <span className="bg-[#35AFA0] text-white border-2 border-white w-6 h-6 text-center rounded-full absolute top-0 end-1 ">1</span>
                      </div>
                      <p className="font-medium text-sm text-[#202435]">But I must explain to you how all this mistaken idea</p>
                    </div>

                    <div className="flex ">
                      <div className="shrink-0 pr-2 relative">
                        <img loading="lazy" src={img_2} alt="post image" className="rounded-full h-15 w-15" />
                        <span className="bg-[#35AFA0] text-white border-2 border-white w-6 h-6 text-center rounded-full absolute top-0 end-1 ">2</span>
                      </div>
                      <p className="font-medium text-sm text-[#202435]">The Problem With Typefaces on the Web</p>
                    </div>

                    <div className="flex ">
                      <div className="shrink-0 pr-2 relative">
                        <img loading="lazy" src={img_3} alt="post image" className="rounded-full h-15 w-15" />
                        <span className="bg-[#35AFA0] text-white border-2 border-white w-6 h-6 text-center rounded-full absolute top-0 end-1 ">3</span>
                      </div>
                      <p className="font-medium text-sm text-[#202435]">English Breakfast Tea With Tasty Donut Desserts</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <h4 className="side_title">social Media</h4>
                 <div className="uppercase text-white font-[Dosis] text-sm">
                  <Link to="/HOME"><div className="social  bg-[#3B5998]">
                      <i className="fa-brands fa-facebook-f mr-6  "/>
                      <p>Facebook</p>
                    </div>
                    </Link>

                    <Link to="/HOME"><div className="social  bg-[#CC2366]">
                     <i className="fa-brands fa-instagram mr-6 "></i>
                      <p>Instagram</p>
                    </div>
                    </Link>

                    <Link to="/HOME">
                    <div className="social  bg-[#1DA1F2]">
                      <i className="fa-brands fa-twitter mr-6 "></i>
                      <p>twitter</p>
                    </div>
                    </Link>

                  <Link  to="/HOME">
                      <div className="social  bg-[#FF4500]">
                      <i className="fa-brands fa-reddit-alien mr-6 "></i>
                      <p>reddit</p>
                    </div>
                  </Link>

                    <Link to='/HOME'>
                    <div className="social  bg-[#E60023]">
                   <i className="fa-brands fa-pinterest-p mr-6 "></i>
                      <p>pinterest</p>
                    </div>
                    </Link>
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <h4 className="side_title">Widget Banner</h4>
                  <img loading="lazy"  src={img_4} alt="Banner" className="max-w-60" />
                </div>

                <div className="flex flex-col gap-5">
                  <h4 className="side_title">Tags</h4>
                  <div className="flex flex-wrap gap-1">
                    <span className="tags">ecommerce</span>
                    <span className="tags">shop</span>
                    <span className="tags">original</span>
                    <span className="tags">brands</span>
                    <span className="tags">store</span>
                    <span className="tags">fashion</span>
                    <span className="tags">toys</span>
                    <span className="tags">home</span>
                  </div>
                </div>

            </div>
            </div>
          </div>
        </div>

       </section>
    </>
  )
}

export default Blog