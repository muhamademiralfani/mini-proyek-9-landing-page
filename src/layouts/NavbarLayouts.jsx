import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const NavbarLayouts = () => {
  const navlist = ['Home', 'About', 'Work', 'Contact', 'Blogs'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    const handleResize = () => {
      if (window.innerWidth < 308) {
        setIsTransparent(false);
      } else {
        setIsTransparent(!isSticky);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    handleScroll();
    handleResize();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isSticky]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent' : 'bg-primary'
      } px-4`}>
      <div className="max-w-screen-xl mx-auto md:py-4 py-3 lg:px-0 md:px-2 px-4 flex items-center justify-between w-full relative">
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img src={Logo} alt="logo.svg" className="w-16 h-16" />
        </Link>
        {/* Hamburger Menu */}
        <button
          className="h-8 flex flex-col p-2 cursor-pointer justify-evenly gap-y-2 bg-white rounded"
          onClick={toggleMenu}>
          <div className="w-6 h-1 bg-black"></div>
          <div className="w-6 h-1 bg-black"></div>
        </button>
        {/* Dropdown Menu */}
        {isMenuOpen && (
          <ul className="absolute top-16 right-10 bg-white shadow-md px-16 py-1 font-semibold text-center z-50">
            {navlist.map((item, index) => (
              <li key={index} className="hover:text-gray-500 cursor-pointer">
                <Link to={`/${item.toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarLayouts;
