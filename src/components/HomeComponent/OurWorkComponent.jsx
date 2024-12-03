import React from 'react';
import { Link } from 'react-router-dom';
import Gallery_1 from '../../assets/gallery/gallery-1.svg';

const OurWorkComponent = () => {
  const navlist = ['All', 'Branding', 'Ilustration', 'Product Design'];

  return (
    <div>
      <div className='max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-y-10 mt-[176px]'>
        <div className='flex justify-center items-center'>
          <h1 className='text-3xl font-semibold'>Our Work So Far</h1>
        </div>
        <div className='flex justify-center items-center'>
          <ul className='flex flex-wrap justify-center gap-4 py-2 text-xl font-semibold text-gray-500'>
            {navlist.map((item, index) => (
              <li key={index} className='flex'>
                <Link to='/' className='hover:text-blue-500 transition duration-300 whitespace-nowrap'>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 px-2 mt-[129px]'>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
        <div>
          <img src={Gallery_1} alt='' />
        </div>
      </div>
    </div>
  );
};

export default OurWorkComponent;
