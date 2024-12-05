/* eslint-disable no-unused-vars */
import React from 'react';
import Airbnb from '../../assets/clientpatner/Airbnb.svg';
import DHL from '../../assets/clientpatner/DHL.svg';
import Dropbox from '../../assets/clientpatner/Dropbox.svg';
import Google from '../../assets/clientpatner/Google.svg';
import Reddit from '../../assets/clientpatner/Reddit.svg';
import Spotify from '../../assets/clientpatner/Spotify.svg';
import Stripe from '../../assets/clientpatner/Stripe.svg';
import Tesla from '../../assets/clientpatner/Tesla.svg';

const ClientPartnerComponent = () => {
  const dataLogo = [Spotify, Dropbox, Tesla, Reddit, Google, Stripe, DHL, Airbnb];

  return (
    <div className='w-full h-screen bg-gray-50 py-20 flex flex-col justify-center items-center'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:px-0 md:px-8 px-0'>
          {dataLogo.map((item, index) => (
            <div
              key={index}
              className={`
              flex justify-center items-center
              border-b border-r border-gray-600
              ${index % 4 === 3 ? 'lg:border-r-0' : ''} 
              ${index >= dataLogo.length - 4 ? 'lg:border-b-0' : ''}
              ${index % 2 === 1 ? 'sm:border-r-0 lg:border-r' : ''}
              ${index >= dataLogo.length - 2 ? 'sm:border-b-0 lg:border-b' : ''}
            `}>
              <img src={item} alt='' className='grayscale opacity-20 hover:opacity-100 transition-opacity duration-300' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientPartnerComponent;
