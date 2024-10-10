import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const MarketingComponent = ({title,desc1,desc2}) => {
  return (
    <div className="w-[30%] flex flex-col gap-6">
    <h2 className="text-2xl">{title}</h2>
    <p className="font-bold">
      {desc1}
    </p>
    <p>
      {desc2}
    </p>
    <h4 className="flex items-center gap-4 underline leading-relax decoration-[#5FA4E6]">
      Learn More <FaArrowRight />
    </h4>
  </div>
  )
}

export default MarketingComponent