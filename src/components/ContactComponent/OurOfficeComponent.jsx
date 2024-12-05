/* eslint-disable no-unused-vars */
import React from 'react';
import office from '../../assets/contact/Office.png';

const OurOfficeComponent = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-8'>
      <h1 className='text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12'>Come stop by our office sometime</h1>

      <div className='relative'>
        {/* Image Container with fixed aspect ratio */}
        <div className='w-full h-[300px] md:h-[400px] lg:h-[500px]'>
          <img src={office} alt='Office location' className='w-full h-full object-cover ' />
        </div>

        {/* Info Card */}
        <div
          className='bg-white  shadow-lg p-6 md:p-8 space-y-4 
                    w-[90%] md:w-auto md:min-w-[320px] lg:min-w-[380px]
                    absolute left-1/2 md:left-8 bottom-4 md:bottom-8 
                    transform -translate-x-1/2 md:translate-x-0'>
          <h2 className='text-xl md:text-2xl font-bold'>New York, USA</h2>

          <p className='text-gray-500'>
            7626 W. 8th St. <br />
            Massapequa, NY 11758
          </p>

          <div className='flex flex-col gap-1'>
            <a href='mailto:info@dsgnr.com' className='text-blue-500 hover:text-blue-600 transition-colors'>
              info@dsgnr.com
            </a>
            <span className='text-gray-600'>(543)890 98</span>
          </div>

          <button className='uppercase text-sm font-medium hover:text-blue-500 transition-colors'>get directions</button>
        </div>
      </div>
    </div>
  );
};

export default OurOfficeComponent;
