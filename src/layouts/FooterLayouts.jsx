/* eslint-disable no-unused-vars */
import React from 'react';
import Sms from '../assets/sms-notification.svg';
import Facebook from '../assets/footer/fa-facebook.svg';
import Twitter from '../assets/footer/fa-twitter.svg';
import Google from '../assets/footer/fa-google.svg';

const FooterLayouts = () => {
  return (
    <footer className='bg-black text-white py-8 px-4'>
      <div className='max-w-screen-xl mx-auto'>
        <div className=' grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col gap-y-8 text-center md:text-left'>
            <h3 className='text-2xl font-bold mb-4'>dsgn.r.</h3>
            <p className='text-sm '>
              Dsgnr. is an award winning creative and design agency <br /> based in New York, USA.
            </p>
            <div className='grid grid-cols-3 w-72 py-2 border border-primary'>
              <div className='col-span-1  flex justify-center'>
                <img src={Sms} alt='' />
              </div>
              <div className='col-span-2'>
                <p>info@dsgnr.com</p>
              </div>
            </div>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            <nav>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    What We Do
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Intro
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Work
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Pricing
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Contact Us
                  </a>
                </li>
              </ul>
            </nav>

            <nav>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Who We Are
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    About
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    News
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-gray-400'>
                    Testimonials
                  </a>
                </li>
              </ul>
            </nav>

            <div className='flex space-x-4 justify-center md:justify-start'>
              <a href='#' className='hover:text-gray-400'>
                <i className='fab fa-twitter'></i>
              </a>
              <a href='#' className='hover:text-gray-400'>
                <i className='fab fa-facebook-f'></i>
              </a>
              <a href='#' className='hover:text-gray-400'>
                <i className='fab fa-google-plus-g'></i>
              </a>
            </div>
          </div>
        </div>

        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center mt-28'>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <a href='#' className='hover:text-gray-400 text-sm'>
              Privacy Policy
            </a>

            <a href='#' className='hover:text-gray-400 text-sm'>
              Terms
            </a>
          </div>
          <ul className='flex space-x-4 mt-4 md:mt-0'>
            <li>
              <img src={Twitter} alt='' />
            </li>
            <li>
              <img src={Facebook} alt='' />
            </li>
            <li>
              <img src={Google} alt='' />
            </li>
          </ul>
        </div>
        <div className='text-center mt-8'>
          <a href='#' className='hover:text-gray-400 text-sm'>
            Made with ❤ by movin
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterLayouts;
