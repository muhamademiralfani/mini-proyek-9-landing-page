import React from 'react';
import sideImage from '../../assets/sideimage.svg';
import ExecutionIcon from '../../assets/step/execution.png';
import LaunchIcon from '../../assets/step/launch.png';
import IdeaIcon from '../../assets/step/idea.png';

const ProcessStepComponent = () => {
  const stepList = [
    {
      title: 'Idea Initiation',
      description: 'For a start, we’ll uncover what makes you stand apart and creatively position your brand and business.',
      img: IdeaIcon,
    },
    {
      title: 'Execution',
      description: 'To deliver exceptionally, we dig deep into a brand’s essence and values, clearly understand them, then inject them into the design.',
      img: ExecutionIcon,
    },
    {
      title: 'Launch',
      description: 'We provide full-service solutions to help you launch, market, and grow your business.',
      img: LaunchIcon,
    },
  ];
  return (
    <div className='bg-gray-100 pt-40'>
      <div className='max-w-screen-xl mx-auto  '>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1'>
          <div className='h-full'>
            <img src={sideImage} className='h-75%' alt='side-image.png' />
          </div>
          <div className='flex flex-col lg:px-16 md:px-12 px-6   '>
            <h1 className='text-start  w-full text-5xl font-semibold mt-12 leading-tight'>
              A simple, yet <br /> effective three step process.
            </h1>
            <div className='mt-8 flex flex-col  gap-y-10'>
              {stepList.map((item, index) => {
                return (
                  <div key={index} className='flex md:flex-col lg:flex-row flex-col'>
                    <img className='w-18 h-18 ' src={item.img} alt={item.title} />
                    <div className='flex flex-col justify-center ml-4'>
                      <h2 className='text-2xl font-semibold'>{item.title}</h2>
                      <p className=''>{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center mt-40 pb-20 px-2'>
          <p className='text-center'>
            Wherever you are in your journey, we’d love to hear from you. <b>Book a free call</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStepComponent;
