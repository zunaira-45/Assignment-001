import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
        <Navbar/>
      <h1 className='text-6xl text-center font-bold bg-yellow-500 font-serif'>
       ABOUT US
      </h1>
      <p className='text-1xl text-center border-spacing-1'>
        We are a team of passionate individuals who are dedicated to creating innovative and effective solutions for
        businesses and individuals alike Our mission is to provide top-notch services that exceed our clients
        expectations
        Welcome to BEAUTY AND CARE
         where beauty meets self expression Founded out of a passion for enhancing natural beauty
          we believe that makeup is not just about looking good
          but also about feeling confident and empowered
          Our mission is to provide highquality cruelty free products that cater to every skin type and tone

          ensuring that everyone can find their perfect match. With a dedicated team of beauty enthusiasts
           we strive to inspire creativity and individuality through our curated collections and expert tips
         Join us on this journey to celebrate beauty in all its forms

      </p>
      <h2 className='text-3xl bg-pink-300 font-serif font-bold text-center'>
        MAKEUP THAT GIVES YOU GLOW LOOK
      </h2>
      <p>
        Our makeup products are designed to enhance your natural beauty not hide it With a wide range
        of shades and finishes to choose from, you can find the perfect match for your skin tone and
        personal style Whether you are looking for a natural everyday look or a bold dramatic finish
        our products are designed to help you achieve the look you want.
      </p>
      <div className='bg-[url("/images/photo.jpg")] h-[400px] bg-no-repeat bg-center px-16 border-3 p-3 justify-center'>
      </div>

      <h2 className='text-3xl bg-pink-300 font-serif font-bold text-center'>
        MAKEUP THAT GIVES YOU RADIANT LOOK
      </h2>
      <p>
        Our makeup products are designed to enhance your natural beauty not hide it. With a wide range
        of shades and finishes to choose from, you can find the perfect match for your skin tone and
        personal style Whether you are looking for a natural everyday look or a bold dramatic finish
        our products are designed to help you achieve the look you want
      </p>
    

      <div className='bg-[url("/images/fish.jpg")] h-[400px] bg-no-repeat bg-center px-16 border-3 p-3 justify-center'>
      </div>
     

      
    <Footer/>
    </div>
  )
}

export default page
