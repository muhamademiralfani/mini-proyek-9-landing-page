/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../assets/Banner.png';
import Hands from '../assets/hands-baner.png';

const BannerComponent = () => {
  return (
    <section
      className='w-screen h-screen bg-primary overflow-hidden relative flex justify-center '
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby='banner-heading'>
      <div className='w-screen h-screen overflow-hidden flex flex-col md:justify-center justify-center lg:justify-stretch lg:mt-16'>
        <div className='max-w-screen-xl mx-auto '>
          <div className='relative z-10 flex'>
            {/* Heading Section */}
            <header className='w-full lg:p-32 md:p-16 p-8 flex '>
              <h1 id='banner-heading' className='text-center text-4xl md:text-6xl lg:text-7xl font-semibold'>
                The work we do, and the people we help.
              </h1>
            </header>
          </div>
        </div>
      </div>

      {/* Hands Image */}
      <img src={Hands} alt='Decorative hands' className='absolute bottom-0 left-0 w-full object-contain z-0' />
    </section>
  );
};

export default BannerComponent;
