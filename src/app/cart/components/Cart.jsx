import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'

const Cart = () => {
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
                <Link href=''>Cart</Link>
                </li>
            </ul>
        </section>
        {/* TITLE */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3.5rem] pb-[2rem]'>Cart</h1>
        </section>
        {/* CONTENT */}
        <section className='w-[100%] h-auto flex items-start justify-center pb-[4rem]'>
            <div className='mx-auto w-[90%] flex justify-start items-start gap-8'>
                {/*  */}
                <section className='w-[65%] h-auto'>
                    {/* TOP BAR */}
                    <div className='w-[100%] bg-slate-200 flex justify-start items-center gap-1 mb-2'>
                        <div className='font-bold w-[40%] border-r border-white p-3'>PRODUCT</div>
                        <div className='font-bold w-[20%] border-r border-white p-3'>PRICE</div>
                        <div className='font-bold w-[20%] border-r border-white p-3'>QUANTITY</div>
                        <div className='font-bold w-[20%] border-white p-3'>TOTAL</div>
                    </div>

                    {/* SECTION */}
                    <div className='w-[100%] border border-slate-200 flex justify-start items-center gap-1'>
                        <div className=' w-[40%] border-r border-slate-200 px-3 py-2'>PRODUCT</div>
                        <div className=' w-[20%] border-r border-slate-200 px-3 py-2'>PRICE</div>
                        <div className=' w-[20%] border-r border-slate-200 px-3 py-2'>
                            <input type='number' placeholder='0' className='p-2 rounded-lg outline-none w-[100%] border border-slate-300' min='1' />
                        </div>
                        <div className=' w-[20%] border-slate-200 px-3 py-4'>TOTAL</div>
                    </div>
                    {/* SECTION */}
                    <div className='w-[100%] border border-slate-200 flex justify-start items-center gap-1'>
                        <div className=' w-[40%] border-r border-slate-200 px-3 py-4'>PRODUCT</div>
                        <div className=' w-[20%] border-r border-slate-200 px-3 py-4'>PRICE</div>
                        <div className=' w-[20%] border-r border-slate-200 px-3 py-4'>QUANTITY</div>
                        <div className=' w-[20%] border-slate-200 px-3 py-4'>TOTAL</div>
                    </div>
                </section>
                {/*  */}
                <section className='w-[35%] h-auto drop-shadow-lg bg-slate-50 py-[2rem]'>
                    <div className='text-[1.5rem] px-3 py-4 mb-2 font-bold '>
                        CART TOTAL
                        <hr className="border-b mt-4 border-slate-300" />
                    </div>
                    <div className='text-sm flex justify-between items-center px-4 pb-4'>
                        <p className=''>Subtotal</p>
                        <p className='font-semibold'>$23.00</p>
                    </div>
                    <div className='flex justify-between items-center px-4 pb-4'>
                        <p className=''>Delivery</p>
                        <p className='font-semibold'>Optional on Checkout</p>
                    </div>
                    <div className='px-4 pb-4'>
                        <hr className="border-b mt-4 border-slate-300" />
                    </div>
                    <div className='w-[100%] flex justify-between items-center px-4 pt-2 pb-4'>
                        <button className='group flex items-center justify-center gap-1 duration-150 ease-out w-[100%] text-white py-4 rounded-lg bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600'>
                            Proceed to Checkout <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </section>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Cart