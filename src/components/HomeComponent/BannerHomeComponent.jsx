/* eslint-disable no-unused-vars */
import React from 'react';
import NavbarLayouts from '../../layouts/NavbarLayouts';
import ShapeBanner from '../../assets/shape-banner.svg';
import HeroElement from '../../assets/hero-elements.svg';

const BannerHomeComponent = () => {
  return (
    <div className='w-screen h-screen bg-primary relative overflow-hidden'>
      <div className='max-w-screen-xl mx-auto '>
        <div className='relative z-10'>
          <NavbarLayouts />
          <div className='w-full  lg:p-32 md:p-16 p-8 '>
            <h1 className='text-start text-4xl md:text-6xl lg:8xl font-semibold '>
              Let’s create <br /> something great together.
            </h1>
          </div>
          <div className=' lg:px-32 lg:py-10 md:px-16 p-8'>
            <div className='relative'>
              <div className='h-14 w-14 bg-white rounded-full '></div>
              <h2 className='absolute inset-0 z-0 top-2 left-6 font-semibold text-2xl'>Book A Free Call</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute inset-0 z-0'>
        <img src={ShapeBanner} alt='shape-banner' height={100} width={1960} className=' ' />
      </div>
      <div className='absolute h-screen inset-0 z-0 place-items-end lg:items-start flex justify-end w-full'>
        <img src={HeroElement} alt='' className='h-50 w-full overflow-hidden' />
      </div>
    </div>
  );
};

export default BannerHomeComponent;
