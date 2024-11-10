import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
      <h1 className='text-center font-bold text-6xl bg-blue-400'>
        SERVICE PAGE
      </h1>
      <p className='text-4xl text-center font-bold'>
        FOR MORE INFORMATION
      </p>
      <p className='text-3xl font-serif text-center'>
        Contact us at:00023333455
        </p>
        <p className='text-3xl font-serif text-center'>
        Email us at:beautycare45.com
      </p>
      <Footer/>
    </div>
  )
}

export default page
