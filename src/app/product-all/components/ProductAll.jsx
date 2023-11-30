"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'

const ProductAll = () => {
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
                <Link href=''>Flowers</Link>
                </li>
            </ul>
        </section>
        {/* TITLE */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3rem] pb-[1rem]'>All Products </h1>
        </section>
        {/*  */}
        <section className='w-[100%] h-auto pt-[5rem] pb-[5rem]'>
            <div className='mx-auto w-[80%] flex justify-start items-center gap-8'>
                <input type='text' placeholder='Search by name...' className='w-[80%] rounded-lg px-4 py-4 outline-none border border-slate-300' />
                <button className='w-[20%] bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600 px-4 py-4 rounded-lg text-white'>Search</button>
            </div>
            {/*  */}
            <div className='mx-auto container h-auto w-[90%] flex items-center justify-between pt-[3rem] pb-[2.5rem]'>
                <h3 className='text-4xl font-black'>All Products</h3>
                <div className='flex items-center justify-end gap-4'>
                    <button className='group flex items-center justify-center gap-1 border rounded-lg px-4 py-2 border-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white '>
                        <BsArrowLeft className='transition ease-in-out duration-300 group-hover:-translate-x-1' />
                        Prev </button>
                    <button className='group flex items-center justify-center gap-1 border rounded-lg px-4 py-2 border-pink-500 hover:bg-gradient-to-br hover:from-pink-500 hover:to-red-500 hover:text-white '>
                        Next 
                        <BsArrowRight className='transition ease-in-out duration-300 group-hover:translate-x-1' />
                    </button>
                </div>
            </div>
            {/* PRODUCTS LIST */}
            <div className='mx-auto container h-auto w-[90%] grid grid-cols-4 gap-8'>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/6.jpeg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/5.jpeg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/1.jpg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/1.jpg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/2.jpg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/5.jpeg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/3.jpg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
                {/* COL */}
                <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                    <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                    <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                        <img className='object-fit' src='/assets/img/products/2.jpg' />
                    </div>
                    <div className='pt-4'> 
                        <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                            Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </div>
            </div>

            {/* PAGINATION */}
            <div className='mx-auto container h-auto w-[90%] flex items-center justify-end pt-[3rem] pb-[2.5rem]'>
                <div className='flex items-center justify-end gap-4'>
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

export default ProductAll