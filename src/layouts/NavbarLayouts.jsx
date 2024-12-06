import React, { useState, useEffect, useRef } from 'react';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';

const NavbarLayouts = () => {
  const navlist = ['Home', 'About', 'Work', 'Contact', 'Blogs'];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen);
  };

  const closeMenus = () => {
    setIsMobileMenuOpen(false);
    setIsDesktopMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      closeMenus(); // Menutup menu jika ukuran layar berubah
    };

    const handleScroll = () => {
      setIsSticky(window.pageYOffset > 0);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenus();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-primary' : 'bg-transparent'} px-4`}>
      <div className='max-w-screen-xl mx-auto md:py-4 py-3 lg:px-0 md:px-2 px-4 flex items-center justify-between w-full relative' ref={menuRef}>
        {/* Logo */}
        <Link to='/' className='cursor-pointer' onClick={closeMenus}>
          <img src={Logo} alt='logo.svg' className='w-16 h-16' />
        </Link>

        {/* Hamburger Menu */}
        <button className='h-8 flex flex-col p-2 cursor-pointer justify-evenly gap-y-2 bg-white rounded' onClick={isMobile ? toggleMobileMenu : toggleDesktopMenu}>
          <div className='w-6 h-1 bg-black'></div>
          <div className='w-6 h-1 bg-black'></div>
        </button>

        {/* Mobile Full-Screen Menu */}
        {isMobile && isMobileMenuOpen && (
          <div className='fixed inset-0 bg-black text-white flex flex-col items-center justify-center z-50' style={{ backgroundColor: '#FDCA09' }}>
            <button className='absolute top-4 right-4 text-white text-2xl  p-4' onClick={closeMenus}>
              &times;
            </button>
            <h1 className='text-2xl mb-6 font-semibold'>Your Name</h1>
            <ul className='text-center space-y-4'>
              {navlist.map((item, index) => (
                <li key={index}>
                  <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={closeMenus} className='hover:text-gray-400 transition text-xl'>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Dropdown Menu */}
        {!isMobile && isDesktopMenuOpen && (
          <ul className='absolute top-16 right-10 bg-white shadow-md px-16 py-1 font-semibold text-center z-50'>
            {navlist.map((item, index) => (
              <li key={index} className='hover:text-gray-500 cursor-pointer'>
                <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} onClick={closeMenus}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavbarLayouts;
