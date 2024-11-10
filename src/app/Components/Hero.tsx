import React from 'react'

const Hero = () => {
  return (
    <div>
      <h1>
        <h2 className="text-primary text-3xl bg-amber-400 gap-2 font-serif text-center font-bold">WELCOME TO BEAUTY AND CARE</h2>
            <div className='bg-[url("/images/pics.webp")] h-100 w-100 bg-no-repeat bg-right-top border-3 p-3 justify-center bg-center'> 
            <p className='text-center text-1xl bg-rose-400'>Beauty and
          Care is a beauty and wellness</p>
          <p className='text-left'> company that offers range of products and
              services to help you look
             and feel your best.</p>
             <p className='text-left'>Our mission is to provide quality products
              service to our customers</p>

              <div className='font-sans bg-center'>
                <button type='submit' className='bg-blue-500 text-white p-1 rounded bg-center'>
                  Learn More
                </button>
                </div>
              </div>

         
         <div>
        <h1 className='text-center text-2xl font-serif font-bold bg-blue-300 p-2'>

            SKIN CARE
        </h1>
        <p className='text-center font-sans font-bold text-2xl'>
            A consistent skincare routine is essential for maintaining healthy, glowing skin. 
            It involves a series of steps
            that cater to your skin type and concerns. This can include cleansing, toning, exfol
            , and moisturizing. By incorporating these practices into your daily routine, you can achieve a radiant
            complexion and address various skin issues such as acne, hyperpigmentation, and fine lines.
        </p>
        <div className='bg-pink-200'>
      <h1 className='text-3xl bg-rose-500 align-center items-center font-serif font-bold text-center'>FOR MORE DETAILS</h1>
      <form className='mt-4'>
        <div className='mb-4'>
          <label className='block text-black-700 font-bold text-3xl' htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className='border p-2 w-full'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black-700 font-bold text-3xl' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='border border-black-300 p-2 w-full'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black-700 font-bold text-3xl' htmlFor='message'>Message</label>
          <textarea
            id='message'
            className='border p-2 w-full'
            placeholder='Enter your message'
            rows={4}
            required
          />
        </div>
        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>
          Send Message
        </button>
      </form>
    </div>
        </div>
        <h1 className='text-center bg-blue-300 font-bold text-4xl'>OUR SKIN CARE PRODUCTS</h1>
        <p className='text-2xl font-serif text-center'>
          Our products are designed to cater to various skin types and concerns. From acne-prone skin to
          mature skin, we have a range of products that can help you achieve healthy, glowing skin.
        </p>
        <div className='bg-[url("/images/beauty.jpg")] h-[200px] 
        bg-no-repeat border-3 p-3 bg-left'>
          <div className='bg-[url("/images/images.jpg")] h-[200px] bg-no-repeat bg-center px-16 border-3 p-3 justify-center'></div>
          </div>
         
          <h1 className='text-center bg-blue-300 font-bold text-4xl'>MAKEUP CARE</h1>
          <p className='text-2xl text-center font-serif'>
            Our makeup Product is very elegant and simple and organic makeup are used to glow your skin You will be vey happy by our makeup for Sure
          </p>
        <div className='bg-[url("/images/photo.jpg")] h-[300px] bg-no-repeat bg-center border-3 p-3 justify-center'></div>
        <h1 className='text-center text-3xl bg-red-400 font-bold p-3'>
          MAKEUP THAT GLOWS
        </h1>
        <p className='text-2xl text-center font-serif'>
          Our makeup products are designed to give you a natural, radiant glow. With a wide range of
          shades and finishes to choose from, you are sure to find the perfect match for your skin tone
        </p>
        <div className='bg-[url("/images/jan.webp")] h-[700px] bg-no-repeat bg-center border-3 p-3 justify-center '></div>
        <h1 className='text-center bg-blue-300 text-3xl p-3 m-1 font-bold'>
         MAKEUP THAT SMOOTH YOUR SKIN
        </h1>
        <p className='text-2xl text-center font-serif'>
          Our makeup products are designed to give you a smooth, even finish. With a wide range of
          shades and finishes to choose from, you're sure to find the perfect match for your skin tone
        </p>
        <div className='bg-[url("/images/ise.webp")] h-96 w-100 bg-no-repeat bg-center border-3 p-3 justify-center cursor-pointer'></div>
         
         </h1>
        </div>
    
  )
}

export default Hero
