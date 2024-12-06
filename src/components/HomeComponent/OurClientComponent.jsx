import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTestimonials } from '../../redux/async/testimonialSlice';
import quote from '../../assets/ourclient/fa-quote-left.svg';

const OurClientComponent = () => {
  const dispatch = useDispatch();
  const { testimonials, isSuccess, error } = useSelector((state) => state.testimonials);

  useEffect(() => {
    dispatch(fetchTestimonials()); // Fetch testimonials data
  }, [dispatch]);

  return (
    <div className='max-w-screen-xl mx-auto py-20 px-4'>
      {/* Header Section */}
      <div className='text-center mb-16'>
        <h1 className='text-4xl font-bold text-gray-900'>What our clients say about us</h1>
      </div>

      {/* Testimonials Section */}
      <div className='grid lg:grid-cols-2 md:grid-cols-1 gap-16 items-start'>
        {isSuccess && testimonials.length > 0 ? (
          testimonials.map((testimonial) => (
            <div key={testimonial.id} className='bg-white p-6 flex flex-col items-center text-center gap-6'>
              <div className='text-yellow-500'>
                <img src={quote} alt='Quote' className='w-8 h-8 mx-auto' />
              </div>
              <p className='text-gray-700 text-lg  leading-relaxed'>{testimonial.message}</p>
              <div className='flex items-center gap-4'>
                <img src={testimonial.foto_profile} alt={testimonial.name} className='w-16 h-16 rounded-full object-cover' />
                <div className='text-left'>
                  <h2 className='font-bold text-xl text-gray-900'>{testimonial.name}</h2>
                  <p className='text-gray-500'>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))
        ) : error ? (
          <div className='text-red-500 text-center'>Failed to load testimonials</div>
        ) : (
          <div className='text-center text-gray-500'>Loading testimonials...</div>
        )}
      </div>
    </div>
  );
};

export default OurClientComponent;
