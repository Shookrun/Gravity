import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const MarketingProject = () => {
  return (
    <div className="flex items-center px-20 justify-between ">
      <div className="w-[30%] flex flex-col gap-6">
        <h2 className="text-2xl">Market Making for Crypto Projects</h2>
        <p className="font-bold">
          Accelerate your token’s journey by boosting its liquidity
        </p>
        <p>
          We invest in building long-term, sustainable relationships and support
          our projects in their growth journey with our services, industry
          expertise and network.
        </p>
        <h4 className="flex items-center gap-4 underline leading-relax decoration-[#5FA4E6]">
          Learn More <FaArrowRight />
        </h4>
      </div>
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
