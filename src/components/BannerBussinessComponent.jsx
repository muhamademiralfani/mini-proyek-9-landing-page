import React from 'react';
import Hands from '../assets/bannerbusiness/Hands.svg';
import Business from '../assets/bannerbusiness/Logo.svg';

const BannerBussinessComponent = () => {
  return (
    <div className='w-full py-20 bg-primary relative mb-10'>
      <div className='w-full bg-primary py-20:'>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-40'>
          <div className=' flex  items-center '>
            <img src={Business} alt='' className='w-[300px]' />
          </div>
          <div className=' flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-bold '>
              Grow Your Business. <br /> Build Great Products.
            </h1>
          </div>
          <div className=' flex  items-center lg:justify-start md:justify-center  justify-center'>
            <div className=''>
              <button className='bg-black text-white py-3 px-5 mb-6 md:mb-0 lg:mb-0'>Book a free call</button>
            </div>
          </div>
        </div>
        <img src={Hands} alt='hands' className='absolute bottom-0 right-20  h-[140px] ' />
      </div>
    </div>
  );
};

export default BannerBussinessComponent;
