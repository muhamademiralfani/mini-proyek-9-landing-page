/* eslint-disable no-unused-vars */
import React from 'react';
import AboutImage from '../../assets/About-image.svg';

const WhoWeAreComponent = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-20 mb-64'>
      <h1 className='text-3xl w-full font-semibold'>Who we are</h1>
      <div className='grid grid-cols-3 mt-10 mb-10'>
        <div className='col-span-2'>
          <p className='text-gray-500 max-w-1/2 max-w-5xl text-xl  leading-relaxed'>
            We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this
            is where splendid emotional relationships between the company and people are born.
          </p>
        </div>
        <div className='flex col-span-1  py-10 justify-end text-end text-3xl '>
          <span>EST. 2020</span>
        </div>
      </div>
      <div className='w-full'>
        <img src={AboutImage} alt='' />
      </div>
    </div>
  );
};

export default WhoWeAreComponent;
