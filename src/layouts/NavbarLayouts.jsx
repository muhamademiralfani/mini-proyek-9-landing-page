import React from 'react';
import Logo from '../assets/logo.svg';
import HumbergerMenu from '../assets/humberger-menu.svg';
import { Link } from 'react-router-dom';

const NavbarLayouts = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-10'>
      <Link>
        <img src={Logo} alt='logo.svg' />
      </Link>
      <Link>
        <img src={HumbergerMenu} alt='' />
      </Link>
    </div>
  );
};

export default NavbarLayouts;
