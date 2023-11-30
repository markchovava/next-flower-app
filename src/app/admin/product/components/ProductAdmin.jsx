"use client"

import React from 'react'
import Link from 'next/link'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'
import { MdDeleteForever, MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'

const ProductAdmin = () => {
  return (
    <div>
        <Header />
        {/* Breadcrumbs */}
        <section className='w-[100%] h-auto bg-slate-50'>
            <ul className='mx-auto w-[90%] py-2 flex justify-start gap-2'>
                <li className='flex items-center justify-start gap-1'>
                <IoHomeOutline />
                <Link href='/'>Home</Link>
                <GoChevronRight />
                </li>
                <li className='flex items-center justify-start gap-1'>
                <Link href='/'>Admin</Link>
                <GoChevronRight />
                </li>
                <li className='flex items-center justify-start gap-1'>
                <Link href='/admin/product' className="font-semibold">Products</Link>
                </li>
            </ul>
        </section>
        {/*  */}
        {/* Title */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3rem] pb-[1rem]'>Products List</h1>
        </section>

        <section className='mx-auto h-auto w-[100%]'>
            <div className='mx-auto w-[90%] h-auto pb-[4rem]'>
                {/*  */}
                <div className='w-[100%] flex items-center justify-between h-auto pb-[1.2rem]'>
                    <div className='w-[35%]'>
                        <input type='text' placeholder='Search by name...' className='w-[100%] py-3 px-3 rounded-lg outline-none border border-slate-300' />
                    </div>
                    <div>
                        <button className='bg-gradient-to-br transition-all duration-150 ease-in rounded-lg text-white from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600 px-8 py-3'>Add</button>
                    </div>
                </div>
                {/*  */}
                <div className="font-bold w-[100%] flex items-center justify-start bg-slate-100 py-3">
                    <div className="w-[30%] p-3 ">PRODUCT NAME</div>
                    <div className="w-[20%] p-3 border-l border-slate-500">PRICE</div>
                    <div className="w-[30%] p-3 border-l border-slate-500">CATEGORIES</div>
                    <div className="w-[20%] p-3 border-l border-slate-500">ACTION</div>
                </div>
                {/* ROW */}
                <div className="w-[100%] flex items-center justify-start border border-slate-300 py-3">
                    <div className="w-[30%] p-3 ">Red Roses</div>
                    <div className="w-[20%] p-3 border-l border-slate-300">$23.00</div>
                    <div className="w-[30%] p-3 border-l border-slate-300">Birthday, Wedding, Anniversary</div>
                    <div className="w-[20%] p-3 border-l border-slate-300 flex justify-start items-center gap-3 text-xl">
                        <Link href=''> <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> </Link>
                        <Link href=''> <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>
                        <Link href=''> <MdDeleteForever className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>
                    </div>
                </div>
                {/* ROW */}
                <div className="w-[100%] flex items-center justify-start border border-slate-300 py-3">
                    <div className="w-[30%] p-3 ">Red Roses</div>
                    <div className="w-[20%] p-3 border-l border-slate-300">$23.00</div>
                    <div className="w-[30%] p-3 border-l border-slate-300">Birthday, Wedding, Anniversary</div>
                    <div className="w-[20%] p-3 border-l border-slate-300 flex justify-start items-center gap-3 text-xl">
                        <Link href=''> <FaEye className='hover:text-blue-500 duration-150 hover:scale-110 transition-all ease-in'/> </Link>
                        <Link href=''> <MdEdit className='hover:text-green-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>
                        <Link href=''> <MdDeleteForever className='hover:text-red-500 duration-150 hover:scale-110 transition-all ease-in' /> </Link>
                    </div>
                </div>
                {/*  */}
                <div className="w-[100%] flex items-center justify-end gap-4 pt-[2rem]">
                    <button className='group flex items-center justify-center gap-1 border rounded-lg px-4 py-2 border-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white '>
                        <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                        Prev </button>
                    <button className='group flex items-center justify-center gap-1 border rounded-lg px-4 py-2 border-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white '>
                        Next 
                        <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
                    </button>
                </div>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default ProductAdmin