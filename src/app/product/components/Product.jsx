"use client"
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { IoHomeOutline } from "react-icons/io5";
import { GoChevronRight } from "react-icons/go";
import Subscribe from '@/components/Subscribe'
import ProductContent from './ProductContent'
import Link from 'next/link';



const Product = () => {
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
              <GoChevronRight />
            </li>
            <li className='flex items-center justify-start gap-1'>
              Product
            </li>
          </ul>
        </section>
        <ProductContent />
        <Footer />
    </div>
  )
}

export default Product