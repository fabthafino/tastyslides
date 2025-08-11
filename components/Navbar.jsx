"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
    const navItems = [
    {
      name: "Home",
      url: "/",
    },
 {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
    {
      name: "Sign In",
      url: "/auth/signin",
    },
  ];
  return (
    <nav className="flex items-center py-4 px-6 justify-between shadow-md">
    <Link href={"/"} className="flex items-center gap-2 z-50">
    <Image
    src={"/slides.png"}
    alt="slides"
    width={1000}
    height={1000}
    className= "w-12 h-12"/>
    <p className='text-xl'>Tasty Slides</p>
    </Link>

    {/* desktop view */}
    <div className="flex items-center gap-8 max-lg:hidden">
            {navItems.map((item, index) => (
          <Link
          key={index}
            href={item.url}
            className="text-lg hover:text-red-500 hover:underline"
          >
            {item.name}
          </Link>
        ))}
    </div>

        {/* mobile and tab view */}
      <div className="lg:hidden z-50">
        <button onClick={()=> setNavOpen(!navOpen)} className="text-2xl">
          {navOpen ? <IoCloseSharp/> : <CgMenuRight/>}
          </button>
      </div>

      <div className={`bg-gray-50 h-dvh overflow-hidden w-full fixed hover:text-red-500 hover:underline top-0  left-0 lg:hidden
                       ${navOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-16 pt-20">
        {navItems.map((item, index) => (
          <Link key={index} href={item.url}  className="text-lg ">
            {item.name}
          </Link>
        ))}
      </div>
      </div>

    </nav>
  )
}

export default Navbar
