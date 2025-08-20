"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { useSession, signOut } from "next-auth/react";
import Button from '@mui/material/Button';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)
  const { data : session } = useSession();

    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  (session);

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
      name: "Reviews",
      url: "/reviews",
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
            className="text-lg hover:text-yellow-700 hover:underline"
          >
            {item.name}
          </Link>
        ))}

         {session ? (
          <div>
            <button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <img
                src={session?.user?.image}
                alt={session?.user?.name.slice(0, 1).toUpperCase()}
                className="w-10 h-10 rounded-full"
              />
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link href={"/profile"}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link href={"/drop-reviews"}>Add your Reviews</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <button onClick={() => signOut()}>Sign Out</button>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link
            href={"/auth/signin"}
            className="text-lg hover:text-yellow-700 hover:underline"
          > Sign In</Link>
        )}
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
          <Link onClick={()=> setNavOpen(false)} key={index} href={item.url}  className="text-lg ">
            {item.name}
          </Link>
        ))}
          {session ? (
            <div>
              <button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img
                  src={session?.user?.image}
                  alt={session?.user?.name.slice(0, 1).toUpperCase()}
                  className="w-10 h-10 rounded-full"
                />
              </button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={handleClose}>
                  <Link href={"/profile"} onClick={() => setNavOpen(false)}>
                    Profile
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    onClick={() => setNavOpen(false)}
                    href={"/drop-reviews"}
                  >
                    Add your Reviews
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <button onClick={() => signOut()}>Sign Out</button>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <Link
              href={"/auth/signin"}
              className="text-lg hover:text-yellow-700 hover:underline"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar
