import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'
import { BsArrowRight } from 'react-icons/bs'



const Checkout = () => {
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
                    <Link href='/checkout'>Checkout</Link>
                </li>
            </ul>
        </section>
        {/* TITLE */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3.5rem] pb-[2rem]'>
                Checkout
            </h1>
        </section>
        {/* CHECKOUT CONTENT */}
        <section className='w-[100%] h-auto'>
            <div className='mx-auto w-[90%] pb-[3rem] flex justify-start items-start gap-6'>
                <section className='w-[60%]'>
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
                    {/*  */}
                    <div className='border-y py-4'>
                        <div className='w-[100%] flex items-center justify-start gap-3'>
                            <input type='checkbox' className='outline-none border border-slate-300 px-3 py-3 rounded-lg' />
                            Create an account?
                        </div>
                    </div>
                    <div className='font-light text-[2rem] py-4'>Shipping Details</div>
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
                </section>
                <section className='w-[40%]'>
                    {/*  */}
                    <div className='font-light text-[2rem] pb-4'>Your Order</div>
                    {/*  */}
                    <div className='font-bold flex items-center justify-start gap-2 bg-slate-200 mb-2'>
                        <div className='w-[60%] p-3'>PRODUCT</div>
                        <div className='w-[40%] p-3 border-l border-white'>TOTAL</div>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-2 py-3 border-b border-slate-200'>
                        <div className='w-[60%] px-3 '>Product</div>
                        <div className='w-[40%] px-3  border-l border-slate-200'>Total</div>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-2 py-3 border-b border-slate-200'>
                        <div className='w-[60%] px-3 '>Product</div>
                        <div className='w-[40%] px-3  border-l border-slate-200'>Total</div>
                    </div>
                    {/*  */}
                    <div className='flex items-start justify-start gap-2 py-3 border-b border-slate-200'>
                        <div className='w-[60%] px-3 font-bold'>SHIPPING</div>
                        <div className='w-[40%] px-3  border-l border-slate-200'>
                            <div className='flex items-center justify-start gap-1  mb-2'>
                                <input type='radio' /> Harare Residential: $15
                            </div>
                            <div className='flex items-center justify-start gap-1  mb-2'>
                                <input type='radio' /> Harare Residential: $15
                            </div>
                            <div className='flex items-center justify-start gap-1  mb-2'>
                                <input type='radio' /> Harare CBD: $5
                            </div>
                            <div className='flex items-center justify-start gap-1  mb-2'>
                                <input type='radio' /> Harare High Density Residential: $20
                            </div>
                            <div className='flex items-center justify-start gap-1 mb-2'>
                                <input type='radio' /> Bulawayo and Rest of Zimbabwe: $50     
                            </div>
                         
                        </div>
                    </div>
                    {/*  */}
                    <div className='flex items-center justify-start gap-2 py-5 bg-pink-100 mt-3'>
                        <div className='w-[60%] px-3 font-bold'>SUBTOTAL</div>
                        <div className='w-[40%] px-3 font-bold border-l border-pink-500'>
                            $23.00
                        </div>
                    </div>

                    <div className='py-3'>
                        <div className='p-3 flex items-center justify-start gap-2 bg-slate-50 mb-1'>
                            <input type='radio' value='Paynow' name='payment_method' /> PayNow (MasterCard, EcoCash, Bank Transfer)
                        </div>
                        <div className='p-3 flex items-center justify-start gap-2 bg-slate-50 mb-1'>
                            <input type='radio' value='Payment On Delivery' name='payment_method' /> Payment On Delivery
                        </div>
                    </div>

                    <div className='pb-3'>
                        <p className='p-3 bg-slate-50 mb-1'>
                            Your personal data will be used to process your order, support your experience throughout this website, 
                            and for other purposes described in our privacy policy.
                        </p>
                        <div className='p-3 flex items-center justify-start gap-2 bg-slate-50 mb-1'>
                            <input type='checkbox' value='Paynow' name='payment_method' /> I have read and agree to the website terms and conditions *
                        </div>
                        
                    </div>

                    <div className=''>
                        <button className='group flex justify-center items-center transition-all ease-in-out duration-200 gap-2 bg-gradient-to-br rounded-lg text-white from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600 w-[100%] py-5'>
                            Proceed <BsArrowRight className='transition-all ease-in-out duration-200 group-hover:translate-x-1' />
                        </button>
                    </div>
                </section>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Checkout



