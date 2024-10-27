import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Contact = () => {
  return (
    <div className='bg-blue-200'>
        <Navbar/>
      <h1 className='text-3xl bg-rose-300 align-center text-center font-serif font-bold'>Contact Page</h1>
      <form className='mt-4'>
        <div className='mb-4'>
          <label className='block text-black-700' htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className='border border-black-300 p-2 w-full'
            placeholder='Enter your name'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black-700' htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            className='border border-black-300 p-2 w-full'
            placeholder='Enter your email'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-black-700' htmlFor='message'>Message</label>
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
      <Footer/>
    </div>
  );
}

export default Contact;