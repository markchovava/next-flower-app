"use client"
import Link from "next/link"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { GoChevronRight } from "react-icons/go"
import { IoHomeOutline } from "react-icons/io5"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"




const OrderView = () => {
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
                <Link href='/order-track'>Order Track</Link>
                <GoChevronRight />
                </li>
                <li className='flex items-center justify-start gap-1'>
                <Link href='/order-track/1' className="font-semibold">ORDER123456</Link>
                </li>
            </ul>
        </section>
        {/*  */}
        {/* Title */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3rem] pb-[1rem]'>Track Order: ORDER123456</h1>
        </section>

        <section className="w-[100%] h-auto">
            <div className="mx-auto w-[90%] pb-[4rem] flex justify-start items-start gap-4">
                <div className="w-[50%]">
                    <h5 className='font-light text-[2rem] pb-4'>Billing Details</h5>
                    <ul>
                        <li>Full name: </li>
                        <li>Address: </li>
                        <li>Country: </li>
                        <li>Phone: </li>
                        <li>Email: </li>
                    </ul>
                </div>
                <div className="w-[50%]">
                    <h5 className='font-light text-[2rem] pb-4'>Shipping Details</h5>
                    <ul>
                        <li className="flex items-center justify-start gap-1">
                            Shipping: 
                            <span className="flex items-center text-white bg-green-600 px-2 rounded-lg">Yes</span> 
                        </li>
                        <li className="flex items-center justify-start gap-1">
                            Shipping Status: 
                            <span className="flex items-center text-white bg-blue-600 px-2 rounded-lg">Dispatched</span> 
                        </li>
                        <li>Shipping Address: </li>
                        <li>Shipping Country: </li>
                        <li>Shipping Phone: </li>
                        <li>Shipping Email: </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="w-[100%] h-auto">
            <div className="mx-auto w-[90%] pb-[4rem]">
                {/* TABLE HEADER */}
                <div className="bg-slate-200 font-bold w-[100%] flex items-center justify-start border border-slate-300">
                    <div className="w-[25%] p-3 border-r border-slate-300">PRODUCT NAME</div>
                    <div className="w-[30%] p-3 border-r border-slate-300">OPTIONS</div>
                    <div className="w-[25%] p-3 border-r border-slate-300">TOTAL</div>
                    <div className="w-[20%] p-3 ">DATE</div>
                </div>
                {/* ROWS */}
                <div className="w-[100%] flex items-center justify-start border border-slate-300">
                    <div className="w-[25%] border-r border-slate-300 p-3">PRODUCT NAME</div>
                    <div className="w-[30%] border-r border-slate-300 p-3">
                        <span>Vase / Box</span>,
                        <span>Flower Food</span>,
                        <span> Heart Stick </span>,
                        <span> Size </span>,
                        <span> Chocolate </span>,
                        <span> Wine </span>,
                        <span> Gin </span>,
                        <span> Cake </span>,
                        <span> Teddy Bear </span>,
                        <span> Ballons </span>,
                        <span> Biltong </span>,
                        <span> Photoshoot </span>
                    </div>
                    <div className="w-[25%] border-r border-slate-300 p-3">$34.00</div>
                    <div className="w-[20%] p-3">28/11/2023</div>
                </div>
                {/* PAGINATION */}
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
        <Footer />
    </div>
  )
}

export default OrderView

/* Product Name, 
Options, 
Date, 
TOTAL

Address
Customer Details
Delivery, 
Status */
