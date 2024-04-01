"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavLogo from "../public/assets/appIcon.png";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className=" fixed w-full h-16 shadow-xl bg-white mb-10">
      <div className=" container mx-auto flex justify-between items-center h-full px-4 2xl:px-16">
        <div className="flex justify-center items-center gap-2">
          <Image src={NavLogo} alt="navlogo" height="20" width="40" />
          <h1 className="text-xl font-bold text-[#fd7e5f]">RentZen</h1>
        </div>
        <div className="hidden sm:flex">
          <ul className="hidden md:flex pr-12">
            <li className="ml-10 capitalize">Home</li>
            <li className="ml-10 capitalize">Blog</li>
            <li className="ml-10 capitalize">FAQ</li>
          </ul>
        </div>
        <div onClick={handleClick} className="sm:hidden  cursor-pointer pl-24">
          <FaBars />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ff6037] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }>
      <div className="flex w-full items-center justify-end">
        <div onClick={handleClick} className="cursor-pointer">
          <FaTimes className="text-white" />
        </div>
        </div>
        <div className="flex-col py-4">
            <ul>
                <Link href="/">
                    <li className="py-4 cursor-pointer text-white text-center text-xl font-light">Home</li>
                </Link>
                <Link href="/">
                    <li className="py-4 cursor-pointer text-white text-center text-xl font-light">Blog</li>
                </Link>
                <Link href="/">
                    <li className="py-4 cursor-pointer text-white text-center text-xl font-light">FAQ</li>
                </Link>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
