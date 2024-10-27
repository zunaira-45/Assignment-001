import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='bg-pink-500 h-12'>
      <div className='text-black-700 flex justify-between text-center'>
        <h1 className='text-2xl m-2 cursor-pointer hover:not-italic font-extrabold'>BEAUTY AND CARE</h1> 

        <nav>
          <ul className='flex gap-3 mr-4'>
            <li className='text-white-700 hover:text-white-500 font-serif'><Link href='/'>Home</Link>
            </li>
            <li>
              <Link className='hover:text-blue-100 font-serif' href="/about">About</Link>
            </li>
            <li>
              <Link className='hover:text-blue-100 font-serif' href="/contact">Contact</Link>
            </li>
            <li>
              <Link className='hover:text-blue-100 font-serif' href="/service">Service</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
