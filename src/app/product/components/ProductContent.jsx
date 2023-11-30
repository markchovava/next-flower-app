"use client"
import { BsArrowRight } from 'react-icons/bs'
import ProductImage from './ProductImage'



const ProductContent = () => {
  return (
    <section className='w-[100%] h-auto bg-white'>
        <div className='mx-auto w-[90%] py-[3.5rem]'>
          {/*  */}
          <div className='w-[100%] h-auto pb-[4rem] flex gap-6 justify-start items-start'>
            <div className='w-[40%]'>
                <div className='w-[100%] aspect-[4/3] rounded-lg bg-pink-400 drop-shadow-lg'>
                  <div className='w-[100%] aspect-[4/5] rounded bg-white flex items-center justify-center'>
                      <img className='object-fit' src='/assets/img/products/6.jpeg' />
                  </div>
                </div>
            </div>
            <div className='w-[60%]'>
                <h3 className='font-light text-[2.5rem]'>Product Name</h3>
                <h2 className='font-semibold text-[2rem] text-pink-500 mb-3'>$50.00</h2>
                <p className='mb-4'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo illum 
                  minima cumque incidunt vitae aspernatur tempore minus maiores. Esse provident 
                  quos dolorum fugit? Nemo praesentium quis, cumque doloribus alias asperiores.
                </p>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Vase / Box</h6>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Box
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Clear vase [+$30]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' />  Box [+$30]
                    </div>
                  </div>
                  <div>
                    <h6 className='font-semibold text-sm mb-1'>Flower Food</h6>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Flower Food (+$5)
                    </div>
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Heart Stick</h6>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Heart Stick [+$5]
                    </div>
                  </div>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Size</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Chocolate</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Wine</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Gin</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Cake</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Cupcakes</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Teddy Bear</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Ballons</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Biltong</h6>
                    <select className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300'>
                      <option>1</option>
                      <option>2</option>
                    </select>
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-2'>Photoshoot (On delivery or voucher)</h6>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Basic 30min [+$40]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' />  Deluxe 1hr [+$60]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Premium 2hr [+$120]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Postcard Prints (10) [+$20]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Canvas A4 [+$40]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Canvas A3 [+$50]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Canvas A2 [+$60]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Canvas A1 [+$80]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Canvas A0 [+$120]
                    </div>
                    <div className='flex items-center justify-start gap-1 mb-1'>
                      <input type='checkbox' /> Postcard Prints (10) [+$20]
                    </div>
                  </div>
                  <div className='w-[50%]'>
                    <h6 className='font-semibold text-sm mb-1'>Specific Date for Delivery</h6>
                    <input type='date'
                      className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300 mb-3' />
                    <h6 className='font-semibold text-sm mb-1'>Specific Time for Delivery</h6>
                    <input type='time' className='block text-white bg-pink-500 w-[100%] px-3 py-2 rounded-md outline-none border border-slate-300' />'
                  </div>
                </section>
                {/*  */}
                <section className='w-[80%] flex justify-start gap-4 items-start mb-4'>
                  <input type='number' min='1' placeholder='0' className='w-[30%] block text-black bg-slate-100 px-4 py-5 rounded-md outline-none border border-slate-300' />
                  <button className='w-[50%] transition-all duration-150 ease-out bg-pink-500 hover:bg-pink-600 text-white px-4 py-5 rounded'>
                    Add to Cart</button>
                </section>
            </div>
          </div>
          {/*  */}
          <div className='mx-auto container h-auto w-[100%] flex items-center justify-start pb-8'>
            <h3 className='text-4xl font-black w-[35%]'>Related Products</h3>
            <hr className='border-b border-pink-200 w-[65%]' />
          </div>
          {/*  */}
          <div className='w-[100%] container grid grid-cols-4 gap-8 pb-[2rem]'>
            {/* COL */}
            <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                <div className='w-[100%] aspect-[4/5] rounded bg-slate-300'></div>
                <div className='pt-4'> 
                    <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                        Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                    </button>
                </div>
            </div>
            {/* COL */}
            <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                <div className='w-[100%] aspect-[4/5] rounded bg-slate-300'></div>
                <div className='pt-4'> 
                    <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                        Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                    </button>
                </div>
            </div>
            {/* COL */}
            <div className='w-[100%] pt-4 pb-5 px-3 bg-white drop-shadow-md'>
                <div><h4 className='font-bold text-2xl pb-2'>Title</h4></div>
                <div className='w-[100%] aspect-[4/5] rounded bg-slate-300'></div>
                <div className='pt-4'> 
                    <button className='group py-3 px-5 rounded-md flex items-center justify-center gap-1 text-sm bg-gradient-to-br from-pink-600 to-pink-400 text-white '>
                        Shop Now <BsArrowRight className='transition ease-in-out duration-200 group-hover:translate-x-1' />
                    </button>
                </div>
            </div>    
          </div>
        </div>
    </section>
  )
}

export default ProductContent


 
/*  
 
 

 
 
  */
