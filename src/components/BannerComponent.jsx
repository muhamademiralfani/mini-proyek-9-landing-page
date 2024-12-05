/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useLocation } from 'react-router-dom';
import Banner from '../assets/Banner.png';
import Hands from '../assets/hands-baner.png';
import Hand from '../assets/hand-baner.png';
import PropTypes from 'prop-types';

const BannerComponent = ({ children }) => {
  const location = useLocation(); // Mengambil informasi lokasi saat ini
  const path = location.pathname.slice(1); // Menghapus '/' dari awal path

  return (
    <section
      className='w-screen h-screen bg-primary overflow-hidden relative flex justify-center'
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
      }}
      aria-labelledby='banner-heading'>
      <div className='w-screen h-screen overflow-hidden flex flex-col md:justify-center justify-center lg:justify-stretch lg:mt-16'>
        <div className='max-w-screen-xl mx-auto'>
          <div className='relative z-10 flex'>
            {/* Heading Section */}
            <header className='w-full lg:p-32 md:p-16 p-8 flex'>
              <h1 id='banner-heading' className='text-center text-4xl md:text-6xl lg:text-7xl font-semibold'>
                {children}
              </h1>
            </header>
          </div>
        </div>
      </div>

      {/* Hands Image */}
      {path === 'about' || path === 'work' ? (
        <img src={Hands} alt='Decorative hands' className='absolute bottom-0 left-0 w-full object-contain z-0' />
      ) : (
        <img src={Hand} alt='Decorative hands' className='absolute bottom-0 lg:right-20 z-0' />
      )}
    </section>
  );
};

PropTypes.BannerComponent = {
  children: PropTypes.node,
};

export default BannerComponent;
