"use client"
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  return (
    <section className="w-[100%] h-auto text-white bg-pink-700">
        <div className="mx-auto w-[90%] pt-[5rem] pb-[2rem] flex items-start justify-between border-b border-pink-500">
          <div className="">
            <div>
              <h3 className="text-4xl font-bold pb-3">The Flower Shop</h3>
              <p className="italic">Get yours today.</p>
              <ul className="flex items-center justify-start gap-2 pt-3">
                <li><Link href='' className="text-sm hover:underline">Home</Link></li> /
                <li><Link href='' className="text-sm hover:underline">About Us</Link></li> /
                <li><Link href='' className="text-sm hover:underline">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div>
            <ul className=" flex items-center justify-center gap-6">
              <li><Link href=''><FaFacebook className="text-3xl transition-all duration-200 ease-in  hover:text-pink-100 hover:scale-110" /></Link> </li>
              <li><Link href=''><FaInstagram className="text-3xl transition-all duration-200 ease-in hover:text-pink-100 hover:scale-110" /></Link> </li>
              <li><Link href=''><FaXTwitter className="text-3xl transition-all duration-200 ease-in hover:text-pink-100 hover:scale-110" /></Link> </li>
              <li><Link href=''><FaYoutube className="text-3xl transition-all duration-200 ease-in hover:text-pink-100 hover:scale-110" /></Link> </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto w-[90%] py-2 flex items-center justify-end">
          <div className="text-sm tracking-wide">This website was developed by Freelance Designers.</div>
        </div>
    </section>
  )
}

export default Footer