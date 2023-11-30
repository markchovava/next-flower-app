"use client"
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useState } from 'react'
import { IoChevronDown } from 'react-icons/io5';
import { MdOutlineShoppingCart } from 'react-icons/md';

const Navigation = () => {
    const [isOccasion, setIsOccasion] = useState(false);
    const [isAccount, setIsAccount] = useState(false);


  return (
    <div className="flex items-center justify-center gap-8 bg-pink-700 text-white py-3">
        <ul className="flex items-center justify-center gap-6 py-3">
        <li> <Link href='/'>Home</Link> </li>
        <li> <Link href='/about'>About Us</Link></li>
        <li> <Link href='/product-all'>All Products</Link></li>
        <li className="relative"> 
            <Link href='#' 
            onClick={() => {setIsOccasion(!isOccasion); setIsAccount(false); }} 
            className={`${isOccasion == true && 'text-yellow-100' } flex items-center justify-center gap-2`}>
            Occasions <IoChevronDown /></Link>
            { isOccasion == true && 
                <AnimatePresence>
                <motion.ul
                    initial={{ opacity:0 }}
                    animate={{ opacity:1}}
                    exit={{  opacity:0}}
                    transition={{ duration: 0.6, type:'spring' }}
                    className="pb-3 top-[140%] left-[-0.7rem] w-[150%] border border-white bg-pink-700 absolute z-20">
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/product-all' className="px-[0.7rem] pb-3 w-[100%]">Birthday</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/product-all' className="px-[0.7rem] pb-3 w-[100%]">Funeral</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/product-all' className="px-[0.7rem] pb-3 w-[100%]">New Baby</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/product-all' className="px-[0.7rem] pb-3 w-[100%]">Wedding</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/product-all' className="px-[0.7rem] pb-3 w-[100%]">For Him Gifts</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/product-all' className="px-[0.7rem] pb-3 w-[100%]">For Her Gifts</Link></li>
                </motion.ul>
                </AnimatePresence>
            }
        </li>
        <li> <Link href='/contact'>Contact Us </Link> </li>   
        <li className="relative"> 
            <Link href='' 
            onClick={() => {setIsAccount(!isAccount); setIsOccasion(false);}} 
            className={`${isAccount == true && 'text-yellow-100' } flex items-center justify-center gap-2`}>
            My Account <IoChevronDown /></Link>
            {isAccount == true && 
                <AnimatePresence>
                <motion.ul
                    initial={{ opacity:0 }}
                    animate={{ opacity:1}}
                    exit={{  opacity:0}}
                    transition={{ duration: 0.6, type:'spring' }}
                    className="pb-3 top-[140%] left-[-0.7rem] w-[150%] border border-white bg-pink-700 absolute z-20">
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/checkout' className="px-[0.7rem] pb-2 w-[100%]">Checkout</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/order-track' className="px-[0.7rem] pb-2 w-[100%]">Track Order</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/admin/profile' className="px-[0.7rem] pb-2 w-[100%]">Edit Profile</Link></li>
                    <li className="w-[100%] h-auto hover:bg-pink-600">
                    <Link href='/admin/product' className="px-[0.7rem] pb-2 w-[100%]">Products List</Link></li>
                </motion.ul>
                </AnimatePresence>
            }
        </li>

        <li> <Link href='/login'>Login </Link> </li>
        </ul>
        <div> 
            <Link href='/cart'
            className="border border-white hover:bg-white hover:text-pink-600 px-4 flex items-center justify-center gap-3 py-3">
        0 <MdOutlineShoppingCart /></Link> </div>
  </div>
  )
}

export default Navigation