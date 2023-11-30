"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'

const Profile = () => {
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
                <Link href='/order-track/1' className="font-semibold">Edit Profile</Link>
                </li>
            </ul>
        </section>
        {/*  */}
        {/* Title */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3rem] pb-[1rem]'>Edit Profile</h1>
        </section>

        <section className='w-[100%] h-auto pb-[4rem]'>
            <div className='w-[90%] mx-auto lg:flex justify-start items-start gap-8'>
                <div className='lg:w-[50%]'>
                    {/*  */}
                    <div className='font-light text-[2rem] pb-4'>Billing Details</div>
                    {/*  */}
                    <div className='flex items-start justify-start gap-3 pb-6'>
                        <div className='w-[50%]'>
                            <h6 className='mb-1 text-sm'>First Name:</h6>
                            <input type='text' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg'/>
                        </div>
                        <div className='w-[50%]'>
                            <h6 className='mb-1 text-sm'>Last Name:</h6>
                            <input type='text' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg'/>
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Address:</h6>
                            <textarea 
                                type='text' 
                                className='w-[100%] h-[5rem] outline-none border border-slate-300 px-3 py-3 rounded-lg'></textarea>
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>City / Town:</h6>
                            <input type='text' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Phone:</h6>
                            <input type='text' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Email:</h6>
                            <input type='text' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Country:</h6>
                            <input type='text' value='Zimbabwe' disabled placeholder='Shipping Address' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                </div>
                {/*  */}
                <div className='lg:w-[50%]'>
                    <div className='font-light text-[2rem] pb-4'>Shipping Details</div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Shipping Address:</h6>
                            <textarea 
                                type='text' 
                                className='w-[100%] h-[5rem] outline-none border border-slate-300 px-3 py-3 rounded-lg'></textarea>
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Shipping Country:</h6>
                            <input type='text' value='Zimbabwe' disabled placeholder='Shipping Address' className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Shipping Phone Number:</h6>
                            <input 
                            type='text'
                            placeholder='Phone Number...' 
                            className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Shipping City / Town:</h6>
                            <input 
                            type='text' 
                            placeholder='Shipping City / Town....'
                            className='w-[100%] outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                        </div>
                    </div>
                    {/*  */}
                    <div className='pb-6'>
                        <div className='w-[100%]'>
                            <h6 className='mb-1 text-sm'>Message on the card (optional):</h6>
                            <textarea 
                                type='text' 
                                placeholder='Message on the card (optional)...'
                                className='w-[100%] h-[5rem] outline-none border border-slate-300 px-3 py-3 rounded-lg'></textarea>
                        </div>
                    </div>
                </div>      
            </div>
            <div className='w-[90%] mx-auto'>
                <button className='w-[100%] py-5 rounded-lg flex justify-center items-center text-white bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600 duration-150 transition-all'>
                    Submit</button>
            </div>
        </section>

        <Footer />
    </div>
  )
}

export default Profile