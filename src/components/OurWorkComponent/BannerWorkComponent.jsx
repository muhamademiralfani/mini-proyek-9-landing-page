/* eslint-disable no-unused-vars */
import React from 'react';
import NavbarLayouts from '../../layouts/NavbarLayouts';
import ShapeBanner from '../../assets/shape-banner.svg';
import HandsBanner from '../../assets/HandsBanner.svg';

const BannerWorkComponent = () => {
  return (
    <div className='w-screen h-screen bg-primary relative  overflow-hidden'>
      <div className='max-w-screen-xl mx-auto '>
        <div className='relative z-10'>
          <NavbarLayouts />
          <div className='w-full lg:px-32 md:p-16 p-8 '>
            <h1 className='text-center text-4xl md:text-6xl lg:8xl font-semibold '>
              The work we do, <br /> and the people we <br /> help.
            </h1>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-0'>
        <img src={ShapeBanner} alt='shape-banner' height={100} width={1960} className=' ' />
      </div>
      <img src={HandsBanner} alt='hands' className='absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[400px] -z-100' />
    </div>
  );
};

export default BannerWorkComponent;
