import Image from 'next/image'
import React from 'react'
import MarketingComponent from '../MarketingProject/MarketingComponent/page'

const Exchange = () => {
  return (
    <div className='flex items-center px-20 justify-between'>
        <div>
            <Image
            src={"/exchange.svg"}
            width={600}
            height={600}
            alt=''
            />
        </div>
        <MarketingComponent title="Market Making for Crypto Exchanges" desc1="Attract more traders and projects with deep order books & liquidity" desc2="Our world-class market making services are proven to help local and emerging exchanges win traders and gain market-leading positions of up to 90% market dominance." />
    </div>
  )
}

export default Exchange