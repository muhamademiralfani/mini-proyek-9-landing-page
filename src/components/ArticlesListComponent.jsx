import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchblogDetail, fetchblogs } from '../redux/async/blogSlice';

const ArticlesListComponent = () => {
  const dispatch = useDispatch();
  const { blogs, pagination, error } = useSelector((state) => state.blogs);

  const [searchQuery, setSearchQuery] = useState('');

  // Fallback untuk pagination jika undefined
  const page = pagination?.page || 1;
  const limit = pagination?.limit || 10;

  useEffect(() => {
    dispatch(fetchblogs({ page, limit, search: searchQuery }));
  }, [dispatch, page, limit, searchQuery]);

  const handleSearch = () => {
    dispatch(fetchblogs({ page: 1, limit, search: searchQuery }));
  };

  const handleNavigate = (slug) => {
    window.location.href = `/blogs/${slug}`;
    dispatch(fetchblogDetail(slug));
  };

  return (
    <section className='py-40 px-4'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center mb-12'>
          <h1 className='text-3xl md:text-4xl text-center font-bold text-gray-900 mb-4 sm:mb-0'>Check out our interesting articles</h1>
          <div className='flex space-x-4'>
            <input type='text' placeholder='Search articles...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='p-2 border rounded-lg w-full lg:w-auto' />
            <button onClick={handleSearch} className='bg-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-opacity-80 transition'>
              Search
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
          {blogs.length > 0 ? (
            blogs.map((item, index) => (
              <article key={index} className='bg-white overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
                <div className='aspect-auto overflow-hidden p-6'>
                  <img
                    src={item.banner || '/default-image.jpg'} // Fallback image
                    alt={item.title}
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                  />
                </div>
                <div className='p-6 flex flex-col gap-4'>
                  <h3 className='text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors'>{item.title || 'Untitled'}</h3>
                  <p className='text-gray-600 line-clamp-3'>{item.description || 'No description available'}</p>
                  <button onClick={() => handleNavigate(item.slug)} className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 mt-2 group'>
                    READ MORE
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p>No articles available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlesListComponent;
