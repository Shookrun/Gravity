import Image from 'next/image'
import React from 'react'

const Exchange = () => {
  return (
    <div>
        <div>
            <Image
            src={"/exchange.svg"}
            width={600}
            height={600}
            alt=''
            />
        </div>
        <div></div>
    </div>
  )
}

export default Exchange