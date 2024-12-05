/* eslint-disable no-unused-vars */
import React from 'react';
import Airbnb from '../assets/clientpatner/Airbnb.svg';
import DHL from '../assets/clientpatner/DHL.svg';
import Dropbox from '../assets/clientpatner/Dropbox.svg';
import Google from '../assets/clientpatner/Google.svg';
import Reddit from '../assets/clientpatner/Reddit.svg';
import Spotify from '../assets/clientpatner/Spotify.svg';
import Stripe from '../assets/clientpatner/Stripe.svg';
import Tesla from '../assets/clientpatner/Tesla.svg';

const ClientPartnerComponent = () => {
  const dataLogo = [Spotify, Dropbox, Tesla, Reddit, Google, Stripe, DHL, Airbnb];

  return (
    <div className='w-full  py-20 mt-20 mb-20'>
      <div className='max-w-screen-lg mx-auto'>
        <h1 className='w-full text-center text-4xl font-bold mb-20'>We worked with the world’s biggest <br /> brands and the most innovative <br /> startups</h1>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-0 md:px-8 px-0'>
          {dataLogo.map((item, index) => (
            <div
              key={index}
              className={`
              flex justify-center items-center
              border-b border-r border-slate-300
              ${index % 4 === 3 ? 'lg:border-r-0' : ''} 
              ${index >= dataLogo.length - 4 ? 'lg:border-b-0' : ''}
              ${index % 2 === 1 ? 'sm:border-r-0 lg:border-r' : ''}
              ${index >= dataLogo.length - 2 ? 'sm:border-b-0 lg:border-b' : ''}
            `}>
              <img src={item} alt='' className='grayscale opacity-100 hover:opacity-20 transition-opacity duration-300' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPartnerComponent;
