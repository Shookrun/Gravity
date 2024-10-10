import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import MarketingComponent from "./MarketingComponent/page";

const MarketingProject = () => {
  return (
    <div className="flex items-center px-20 justify-between ">
   <MarketingComponent title="Market Making for Crypto Projects" desc1=" Accelerate your token’s journey by boosting its liquidity" desc2="We invest in building long-term, sustainable relationships and support
      our projects in their growth journey with our services, industry
      expertise and network."/>
      <div className="relative w-[40%]">
        <Image
        src={"/div.svg"}
       
        width={400}
        height={400}
        alt=""
        />

      </div>
    </div>
  );
};

export default MarketingProject;
