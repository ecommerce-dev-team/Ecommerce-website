import { MdOutlineMail } from "react-icons/md";

const Newsletter = () => {
  return (
    <div className="bg-[#35AFA0] relative">
      <div className="container mx-auto px-5">
        <div className="flex justify-evenly items-end">
          <div className="py-20">
            <div className="text">
              <p className="text-gray-200 text-[16px]">
                $20 discount for your first order
              </p>
              <h3 className="text-white text-[20px] font-bold">
                Join our newsletter and get...
              </h3>
              <p className="text-gray-200 text-[16px]">
                Join our email subscription now to get updates on promotions and
                coupons.
              </p>
            </div>
            <div className="Subscribe relative mt-10 ">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-[62px] text-[16px] ps-10  pe-30 rounded-lg border border-[#E4E5EE] bg-white outline-none focus:border-[#35AFA0]"
              />
              <button className="absolute top-0 right-0 text-white h-12 bg-[#35AFA0] px-4 my-1.5  me-2   rounded-lg ">
                Subscribe
              </button>
              <MdOutlineMail className="absolute top-5 left-2 text-[25px] text-[#E4E5EE] " />
            </div>
          </div>

          <div className="hidden  md:block">
            <img src="/Subscribe.png" alt="" className="w-full  " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
