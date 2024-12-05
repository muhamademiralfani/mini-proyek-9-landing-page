/* eslint-disable no-unused-vars */
import React from 'react';
import ContactImage from '../../assets/contact/contact.svg';

const FormContact = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32'>
        {/* Image Section */}
        <div className='flex items-center justify-center'>
          <div className='bg-[#FEF1E0] w-full p-6 md:p-12 rounded-lg shadow-lg'>
            <img src={ContactImage} alt='Contact' className='w-full h-[540px] max-w-md mx-auto' />
          </div>
        </div>

        {/* Form Section */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl md:text-4xl font-semibold text-center lg:text-end mb-8 md:mb-12'>
            We’d love to hear <br /> from you
          </h1>

          <form className='w-full max-w-xl mx-auto lg:ml-0'>
            <div className='flex flex-col gap-4 md:gap-6'>
              <input type='text' placeholder='Name*' className='w-full py-3 md:py-4 px-4 border border-gray-400 rounded focus:outline-none focus:border-black' />
              <input type='email' placeholder='Email*' className='w-full py-3 md:py-4 px-4 border border-gray-400 rounded focus:outline-none focus:border-black' />
              <input type='url' placeholder='Website URL*' className='w-full py-3 md:py-4 px-4 border border-gray-400 rounded focus:outline-none focus:border-black' />
              <textarea placeholder='Project Details*' className='w-full h-32 md:h-40 px-4 py-3 md:py-4 border border-gray-400 rounded focus:outline-none focus:border-black resize-none'></textarea>
              <button className='w-full py-3 md:py-4 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors mt-4'>Send Proposal</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
