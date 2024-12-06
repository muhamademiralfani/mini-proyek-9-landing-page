/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postContact } from '../../redux/async/contactSlice';
import ContactImage from '../../assets/contact/contact.svg';

const FormContact = () => {
  const dispatch = useDispatch();
  const { isLoading, isSuccess, error } = useSelector((state) => state.contact);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postContact(formData));
  };

  // Reset form after successful submission
  useEffect(() => {
    if (isSuccess) {
      setFormData({
        name: '',
        email: '',
        website: '',
        message: '',
      });
    }
  }, [isSuccess]);

  return (
    <div className='max-w-screen-xl mx-auto py-10 lg:py-20 px-4 lg:px-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-32'>
        {/* Image Section */}
        <div className='flex items-center justify-center'>
          <div className='bg-[#FEF1E0] w-full p-6 md:p-12 rounded-lg shadow-lg'>
            <img src={ContactImage} alt='Contact' className='w-full h-[540px] max-w-md mx-auto' />
          </div>
        </div>

        {/* Form Section */}
        <div className='flex flex-col justify-center'>
          <h1 className='text-2xl md:text-4xl font-semibold text-center lg:text-end mb-8 md:mb-12'>
            We’d love to hear <br /> from you
          </h1>

          <form className='w-full max-w-xl mx-auto lg:ml-0' onSubmit={handleSubmit}>
            <div className='flex flex-col gap-4 md:gap-6'>
              <input type='text' name='name' placeholder='Name*' value={formData.name} onChange={handleChange} required className='w-full py-3 md:py-4 px-4 border border-gray-400 rounded focus:outline-none focus:border-black' />
              <input type='email' name='email' placeholder='Email*' value={formData.email} onChange={handleChange} required className='w-full py-3 md:py-4 px-4 border border-gray-400 rounded focus:outline-none focus:border-black' />
              <input type='url' name='website' placeholder='Website URL*' value={formData.website} onChange={handleChange} required className='w-full py-3 md:py-4 px-4 border border-gray-400 rounded focus:outline-none focus:border-black' />
              <textarea
                name='message'
                placeholder='Project Details*'
                value={formData.message}
                onChange={handleChange}
                required
                className='w-full h-32 md:h-40 px-4 py-3 md:py-4 border border-gray-400 rounded focus:outline-none focus:border-black resize-none'></textarea>
              <button type='submit' className={`w-full py-3 md:py-4 px-4 bg-black text-white rounded hover:bg-gray-800 transition-colors mt-4 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Send Proposal'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormContact;
