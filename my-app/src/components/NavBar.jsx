import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="font-poppin border-b-2 border-black xl:border-0 flex justify-between w-full xl:container mx-auto xl:py-7 py-5 px-3 items-center top-0 fixed xl:static z-20 bg-white">
      <div className={nav ? "block" : "hidden"}>
        <div className=" bg-white absolute z-10 top-0 left-0 w-full h-auto flex flex-col items-center py-6 space-y-3 rounded-b-3xl border-b-4 border-black">
          <a href="/" className=" hover:underline">
            Products
          </a>
          <a href="/" className=" hover:underline">
            Startup tools
          </a>
          <a href="/" className=" hover:underline">
            Features
          </a>
          <a href="/" className=" hover:underline">
            Live Suppport
          </a>
          <a href="/" className=" hover:underline">
            Our plans
          </a>
          <button className="border-2 font-bold border-black py-2 px-10 rounded-lg bg-[#cbea2d] custom_shadow hover:bg-black hover:text-white transition hover:ease-in-out">
            Login
          </button>
          <AiFillCloseCircle size={40} onClick={handleNav} />
        </div>
      </div>
      <div className="text-lg xl:text-2xl font-bold tracking-wider">
        Connect Teams
      </div>
      <div className="hidden text-xl xl:flex space-x-5 items-center">
        <a href="/" className=" hover:underline">
          Products
        </a>
        <a href="/" className=" hover:underline">
          Startup tools
        </a>
        <a href="/" className=" hover:underline">
          Features
        </a>
        <a href="/" className=" hover:underline">
          Live Suppport
        </a>
        <a href="/" className=" hover:underline">
          Our plans
        </a>
        <button className="border-2 font-bold border-black py-2 px-10 rounded-lg bg-[#cbea2d] custom_shadow hover:bg-black hover:text-white transition hover:ease-in-out">
          Login
        </button>
      </div>
      <div className="block xl:hidden">
        <RxHamburgerMenu size={30} onClick={handleNav} />
      </div>
    </div>
  );
}
