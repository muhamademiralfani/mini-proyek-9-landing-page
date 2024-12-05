/* eslint-disable no-unused-vars */
import React from 'react';
import Jeruk from '../../assets/jeruk.png';

const FeatureWorkComponent = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-20 '>
      <h1 className='w-full lg:text-start md:text-center text-center text-3xl font-semibold mb-10'>Featured Work</h1>
      <p className='font-semibold w-full lg:text-end mb-20 text-xl md:text-center text-center'>
        We are an award-winning creative & <br /> design agency committed to <br /> excellence since forever.
      </p>
      <div className='grid gird-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-6 px-4'>
        <div>
          <img src={Jeruk} alt='' />
        </div>
        <div>
          <img src={Jeruk} alt='' />
        </div>
        <div>
          <img src={Jeruk} alt='' />
        </div>
        <div>
          <img src={Jeruk} alt='' />
        </div>
        <div>
          <img src={Jeruk} alt='' />
        </div>
        <div>
          <img src={Jeruk} alt='' />
        </div>
      </div>
    </div>
  );
};

export default FeatureWorkComponent;
