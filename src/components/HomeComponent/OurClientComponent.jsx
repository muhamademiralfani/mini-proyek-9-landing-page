import React from 'react';
import avatar from '../../assets/ourclient/avatar.svg';
import quote from '../../assets/ourclient/fa-quote-left.svg';

const OurClientComponent = () => {
  return (
    <div className='max-w-screen-xl h-screen mx-auto '>
      <div className='w-full my-40'>
        <h1 className='font-bold lg:ml-36 md:ml-0 ml-0 px-4 text-4xl'>What our clients say about us</h1>
      </div>
      <div className='grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-y-10 px-4'>
        <div className='flex gap-x-6'>
          <div className='w-full flex justify-center items-start'>
            <img src={quote} alt='' />
          </div>
          <div className='flex flex-col gap-y-12'>
            <p>
              I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them
              again and would recommend them to anyone else looking for a designer and developer. They know their stuff!
            </p>
            <div className='flex w-full items-center gap-5'>
              <img src={avatar} alt='' />
              <div>
                <h2 className='font-bold'>Milton Austin</h2>
                <p className='text-gray-500'>Product Manager, Slack</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-x-6'>
          <div className='w-full flex justify-center items-start'>
            <img src={quote} alt='' />
          </div>
          <div className='flex flex-col gap-y-12'>
            <p>
              I would like to say that this experience was great. The team was very professional and answered all our questions and was committed to completing our project on time. We are happy to have worked with dsgnr. and would hire them
              again and would recommend them to anyone else looking for a designer and developer. They know their stuff!
            </p>
            <div className='flex w-full items-center gap-5'>
              <img src={avatar} alt='' />
              <div>
                <h2 className='font-bold'>Milton Austin</h2>
                <p className='text-gray-500'>Product Manager, Slack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClientComponent;
