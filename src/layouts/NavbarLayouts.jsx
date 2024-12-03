import React from 'react';
import Logo from '../assets/logo.svg';
import Humberger from '../assets/Hamburger.svg';
import { Link } from 'react-router-dom';

const NavbarLayouts = () => {
  return (
    <div className=' lg:py-10 md:py-5 py-3 lg:px-0 md:px-2 px-4 flex items-center justify-between'>
      <Link>
        <img src={Logo} alt='logo.svg' className='w-16 h-16' />
      </Link>
      <Link className='h-11 flex '>
        <img src={Humberger} alt='' />
      </Link>
    </div>
  );
};

export default NavbarLayouts;
