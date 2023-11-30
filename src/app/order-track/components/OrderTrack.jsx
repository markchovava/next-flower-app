"use client"

import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { GoChevronRight } from "react-icons/go"
import { IoHomeOutline } from "react-icons/io5"
import { FaEye } from "react-icons/fa";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"


const OrderTrack = () => {
  return (
    <div>
        <Header />
        {/* Breadcrumbs */}
        <section className='w-[100%] h-auto bg-slate-50'>
            <ul className='mx-auto w-[90%] py-2 flex justify-start gap-2'>
                <li className='flex items-center justify-start gap-1'>
                <IoHomeOutline />
                <Link href=''>Home</Link>
                <GoChevronRight />
                </li>
                <li className='flex items-center justify-start gap-1'>
                <Link href=''>Order</Link>
                </li>
            </ul>
        </section>
        {/* Title */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3rem] pb-[1rem]'>Track Order</h1>
        </section>
        {/* SEARCH */}
        <section className="w-[100%] h-auto">
          <div className='mx-auto w-[80%] flex justify-start items-center gap-8 pb-[4rem]'>
              <input type='text' placeholder='Search by name...' className='w-[80%] rounded-lg px-4 py-4 outline-none border border-slate-400' />
              <button className='w-[20%] bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600 px-4 py-4 rounded-lg text-white'>Search</button>
          </div>
        </section>
        <section className="w-[100%] h-auto">
          <div className="mx-auto w-[90%] h-auto pb-[4rem]">
            {/*  */}
            <div className="font-bold w-[100%] flex items-center justify-start bg-slate-100 py-3">
              <div className="w-[35%] p-3 ">ORDER NUMBER</div>
              <div className="w-[20%] p-3 border-l border-slate-500">DATE</div>
              <div className="w-[25%] p-3 border-l border-slate-500">STATUS</div>
              <div className="w-[20%] p-3 border-l border-slate-500">ACTION</div>
            </div>
            {/*  */}
            <div className="w-[100%] flex items-center justify-start py-3 border-b border-x border-slate-300">
              <div className="w-[35%] p-3 ">ORDER123456</div>
              <div className="w-[20%] p-3 border-l border-slate-300">28/11/2023</div>
              <div className="w-[25%] p-3 border-l border-slate-300">Dispatched</div>
              <div className="w-[20%] p-3 border-l border-slate-300">
                <Link href='/order-track/1'>   
                  <FaEye className="text-xl transition-all ease-out duration-150 hover:scale-110 hover:text-pink-600"/>
                </Link>
              </div>
            </div>
            {/*  */}
            <div className="w-[100%] flex items-center justify-end gap-4 pt-[3rem]">
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
        {/* FOOTER */}
        <Footer />
    </div>
  )
}

export default OrderTrack