import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="p-4 flex items-center justify-between">
        <Image
          src="/logo.svg"
          width={150}
          height={100}
          alt=""
        />

        <div className="flex gap-3">
            <Link href="/">ABOUT US</Link>
            <Link href="/">OUR SERVICES</Link>
            <Link href="/">WORK WITH US</Link>
            <Link href="/">BLOG</Link>
        </div>
        <Link href="/" className="button">GET IN TOUCH</Link>
    </div>
  )
}

export default Navbar