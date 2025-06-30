import { useContext } from "react";
import Newsletter from "../Newsletter/Newsletter";
import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";
import { AuthContext } from "../Context/AuthContext";

const Footer = () => {

  const {Token} = useContext(AuthContext);
  return (
    
    <>

      {Token? <>

      <Newsletter/>

      <div className="bg-[#F7F8FD] ">
        <TopFooter />
      </div>
      <BottomFooter />
      
      </> : ""}
    </>
  );
};

export default Footer;
