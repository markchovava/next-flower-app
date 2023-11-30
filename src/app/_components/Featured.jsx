"use client"
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

const Featured = () => {
  return (
    <section className='w-[100%] bg-gray-50 h-auto pt-[4rem] pb-[5rem]'>
        <div className='mx-auto container h-auto w-[90%] flex items-center justify-start pb-8'>
            <h3 className='text-4xl font-black w-[35%]'>Featured Products</h3>
            <hr className='border-b border-pink-200 w-[65%]' />
        </div>
        <div className='mx-auto container h-auto w-[90%] grid grid-cols-4 gap-8'>
            {/* COL */}
            <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                    <img className='object-fill' src='/assets/img/products/1.jpg' />
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
                    <img className='object-fill' src='/assets/img/products/5.jpeg' />
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
                    <img className='object-fill' src='/assets/img/products/3.jpg' />
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
                    <img className='object-fill' src='/assets/img/products/5.jpeg' />
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
                    <img className='object-fill' src='/assets/img/products/1.jpg' />
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
                    <img className='object-fill' src='/assets/img/products/2.jpg' />
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
                    <img className='object-fit' src='/assets/img/products/1.jpg' />
                </div>
                <div className='pt-4'> 
                    <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                        Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Featured