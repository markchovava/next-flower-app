"use client"

import Link from "next/link"
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoChevronDown } from "react-icons/io5";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from "./Navigation";



const Header = () => {

  return (
    <section className="w-[100%] mx-auto h-auto">
      {/* LOGO */}
      <div 
        style={{ backgroundImage: `url('/assets/img/rose_bg.jpg')`}} 
        className="w-[100%] h-[160px] bg-left bg-no-repeat bg-cover flex items-end justify-center ">
        <div className="mb-4 font-semibold text-[4rem] text-pink-700">River Range Roses</div>
        
      </div>
      {/* NAVIGATION */}
      <Navigation />
     
    </section>
  )
}

export default Header