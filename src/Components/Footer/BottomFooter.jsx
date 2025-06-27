import { BsTelephoneOutbound } from "react-icons/bs";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const BottomFooter = () => {
  return (
    <div className="w-full bg-[white] py-10 px-10 md:px-30">
      <div className="top border-b border-[#E4E5EE]  w-full flex flex-col md:flex-row flex-wrap justify-evenly items-center md:justify-center gap-10  ">
        <div className="tel  flex items-center gap-5  ">
          <div className="text-[#202435] border border-[#E4E5EE] p-3 rounded-full text-2xl">
            <BsTelephoneOutbound />
          </div>
          <div>
            <h3 className="text-[#202435] text-[20px] font-bold">
              8 800 555-55
            </h3>
            <p className="text-gray-500 text-[11px]">Working 8:00 - 22:00</p>
          </div>
        </div>

        <div className="flex py-10 items-center  flex-wrap gap-5 justify-center px-2">
          <div className="text">
            <h5 className="text-[#202435] text-[20px] font-bold">
              Download App on Mobile:
            </h5>
            <p className="text-gray-500 text-[11px]">
              15% discount on your first purchase
            </p>
          </div>
          <div className="img flex gap-5 justify-center">
            <img
              src="/GooglePlay.png"
              alt=""
              className="w-full max-w-[120px]"
            />
            <img src="/AppStore.png" alt="" className="w-full max-w-[120px]" />
          </div>
          <div className="icon flex gap-5 justify-center">
            <div className="text-[#202435] border border-[#E4E5EE] p-3 rounded-full text-2xl">
              <CiFacebook />
            </div>
            <div className="text-[#202435] border border-[#E4E5EE] p-3 rounded-full text-2xl">
              <CiTwitter />
            </div>
            <div className="text-[#202435] border border-[#E4E5EE] p-3 rounded-full text-2xl">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom  w-full flex flex-col md:flex-row flex-wrap justify-evenly md:justify-center  items-center gap-10  mt-8">
        <p className="text-[#9B9BB4] text-[12px] text-center ">
          Copyright 2025 © All rights reserved by Blackrise Theme
        </p>

        <div className="flex  items-center text-  flex-wrap gap-5 justify-center  md:justify-center px-2">
          <ul className="flex gap-2 justify-center text-[12px] items-center justify-startt  md:justify-center px-2">
          <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie</li>
          </ul>
          <img src="/Bank.png" alt="" />
        </div>
      </div>
    </div>
  );
};
export default BottomFooter;
