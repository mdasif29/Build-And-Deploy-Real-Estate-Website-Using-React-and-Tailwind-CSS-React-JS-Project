import React from 'react'
import { assets } from '../assets/assets'
import { px } from 'framer-motion'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
        <div className='w-full md:w-1/3 mb-8 md:mb-0'>
          <img src= 'https://cdn-icons-png.flaticon.com/128/13979/13979460.png' alt="logo" width="110px"  />
          <p className='text-gray-400 mt-r'>
            Have you dreamt of luxury living in the city? In our constant endeavour to provide our customers with access
            to an enhanced quality of life, we created affordable luxury living in the city for you, so you can embrace the
            life you desire in the luxury apartments for sale in India.
          </p>
        </div>

        <div className='w-full md:w-1/5 mb-8 md:mb-0'>
  <h3 className='text text-lg font-bold mb-4 text-blue-600'>Company</h3> 
  <ul className='flex flex-col gap-2 text-gray-500'>
    <a href='#Header' className='hover:text-blue-500'>Home</a> 
    <a href='#About' className='hover:text-blue-500'>About Us</a>
    <a href='#Contact' className='hover:text-blue-500'>Contact Us</a>
    <a href='#' className='hover:text-blue-500'>Privacy Policy</a>
  </ul>
</div>


        <div className='w-full md:w-1/3'>

          <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
          <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles, and resources, sent to your inbox weekly</p>

          <div className='flex gap-2'>
            
            <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 broder boader-grey-700 focus:outline-none w-full md:w-auto' />
            <button className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
            </div>
          </div>
        </div>
  
      <div className='border-t border-gray-700 py-t mt-10 text-center text-blue-300'> Copyright @ 2024 BUMBUMKOLA All right reserved
      </div>
    </div>


  )
}

export default Footer
