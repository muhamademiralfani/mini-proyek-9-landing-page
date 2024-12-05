/* eslint-disable no-unused-vars */
import React from 'react';

const MaterixBanner = () => {
  const data = [
    {
      title: '350 +',
      des: 'Clients Worldwide',
    },
    {
      title: '20 +',
      des: 'Team Members',
    },
    {
      title: '100 +',
      des: 'Projects Completed',
    },
    {
      title: '85M +',
      des: 'Revenue Generated',
    },
  ];

  return (
    <div className="w-full bg-black py-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-screen-xl mx-auto px-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-primary text-4xl font-extrabold">{item.title}</h1>
            <p className="text-white text-lg md:text-xl mt-2">{item.des}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MaterixBanner;
