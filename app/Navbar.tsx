"use client";
import React, { useState } from "react";
import { Menu } from "lucide-react";
import { Avatar, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 w-full z-50">
        <div className="text-red-500 font-bold text-lg">LOGO</div>
        <Flex align={"center"}>
          <ul className="hidden md:flex space-x-6 text-gray-700 text-sm">
            <li className="hover:text-black cursor-pointer">HOME</li>
            <li className="hover:text-black cursor-pointer">DISCOVERY</li>
            <li className="hover:text-black cursor-pointer">PHOTOS</li>
            <li className="hover:text-black cursor-pointer">CONTACT</li>
          </ul>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="cursor-pointer" size={24} />
          </button>
          <div className="w-8 h-8 ml-6 bg-gray-300 rounded-full overflow-hidden">
            <Avatar
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback="A"
              radius="full"
              className="cursor-pointer"
            />
          </div>
        </Flex>
      </nav>
      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden absolute top-0 left-0 w-full bg-white shadow-md p-4 flex flex-col space-y-4 text-gray-700 text-sm z-10">
          <li className="hover:text-black cursor-pointer">HOME</li>
          <li className="hover:text-black cursor-pointer">DISCOVERY</li>
          <li className="hover:text-black cursor-pointer">PHOTOS</li>
          <li className="hover:text-black cursor-pointer">CONTACT</li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
