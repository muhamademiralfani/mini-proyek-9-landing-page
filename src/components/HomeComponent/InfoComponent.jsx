import React from 'react';
import designIcon from '../../assets/vuexas/pen-tool-2.svg';
import researchIcon from '../../assets/vuexas/search-normal.svg';
import managementIcon from '../../assets/vuexas/briefcase.svg';
import noCodeIcon from '../../assets/vuexas/scroll.svg';

const InfoComponent = () => {
  const data = [
    {
      title: 'exceptional design',
      img: designIcon,
    },
    {
      title: 'in-depth research',
      img: researchIcon,
    },
    {
      title: 'product management',
      img: managementIcon,
    },
    {
      title: 'No-code development',
      img: noCodeIcon,
    },
  ];
  return (
    <div className='border-b-[3px] border-b-gray-200 w-full'>
        <div className='max-w-screen-xl mx-auto flex flex-col lg:py-10 md:py-5 py-3 mt-10 lg:px-0 md:px-2 px-4 gap-20 items-center  '>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-y-8 w-full mt-10'>
        {data.map((item, index) => {
          return (
            <div key={index} className='col-span-1 flex flex-col items-center lg:gap-y-16 md:gap-y-8 gap-y-4   justify-center '>
              <div>
                <img src={item.img} alt='' />
              </div>
              <h3 className='uppercase text-center font-bold'>{item.title}</h3>
            </div>
          );
        })}
      </div>
      <div className='grid lg:grid-cols-3 grid-cols-1 gap-x-20 gap-y-40 md:grid-cols-1 px-2 my-28'>
        <div className='col-span-1 flex justify-center  mr-8'>
          <h1 className='text-[100px] font-bold text-primary'>hello</h1>
        </div>
        <div className='col-span-1 mr-6'>
          <h2 className='text-4xl lg:text-end md:text-center text-center md:text-6xl lg:text-4xl font-bold  leading-snug '>Award winning agency specializing in creative design</h2>
        </div>
        <div className='col-span-1 flex flex-col justify-center mb-6 '>
          <p className='lg:text-sm md:text-xl text-xl mb-8 lg:text-start md:text-center text-center'>We help businesses grow, launch products <br /> and build enduring relationships with our <br /> communities.</p>
          <h3 className='underline-offset-8 font-semibold underline mt-2 lg:text-start md:text-center text-center'>Our Info</h3>
        </div>
      </div>
    </div>
    </div>
  
  );
};

export default InfoComponent;
