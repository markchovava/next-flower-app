import { GoChevronRight } from 'react-icons/go'
import { IoHomeOutline } from 'react-icons/io5'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'



const Register = () => {
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
                <Link href=''>Register</Link>
                </li>
            </ul>
        </section>
        {/* TITLE */}
        <section className='w-[100%] h-auto flex items-center justify-center'>
            <h1 className='text-[4rem] font-black pt-[3rem] pb-[1.5rem]'>Register</h1>
        </section>
        <section className='w-[100%] h-auto flex flex-col items-center justify-center'>
            <div className='mx-auto w-[80%] lg:w-[40%] md:w-[65%] pb-[3rem]'>
                <div className='text-4xl font-light pb-4'>Register Here.</div>
                <div className='pb-4 w-[100%]'>
                    <h6 className='block font-bold pb-1'>Email</h6>
                    <input type='text' className='w-[100%] outline-none rounded-lg border border-slate-300 px-3 py-4' />
                </div>
                <div className='pb-4 w-[100%]'>
                    <h6 className='block font-bold pb-1'>Password</h6>
                    <input type='password' className='w-[100%] outline-none rounded-lg border border-slate-300 px-3 py-4' />
                </div>
                <div className='pb-4 w-[100%]'>
                    <h6 className='block font-bold pb-1'>Confirm Password</h6>
                    <input type='password' className='w-[100%] outline-none rounded-lg border border-slate-300 px-3 py-4' />
                </div>
                <div className='pb-4 w-[100%]'>
                    <h6 className='pb-1 flex items-center gap-2'>
                        Already registered?
                        <Link href='/login' className='text-blue-600 hover:text-blue-700 hover:underline'>
                          Login here.
                        </Link>
                    </h6>
                </div>
                <div className='pb-4 w-[100%] flex items-center justify-center'>
                    <button className='w-[100%] rounded-lg text-white duration-150 ease-out flex items-center justify-center gap-2 py-4 bg-gradient-to-br from-pink-500 to-red-500 hover:from-pink-500 hover:to-pink-600 text-center'>
                        Submit
                    </button>
                </div>
            </div>
        </section>
        <Footer />
    </div>
  )
}

export default Register