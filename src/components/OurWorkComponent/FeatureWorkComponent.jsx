import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPortfolios } from '../../redux/async/portfolioSlice';

const FeatureWorkComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { portfolios, isSuccess, error } = useSelector((state) => state.portfolios);

  useEffect(() => {
    dispatch(fetchPortfolios({ page: 1, limit: 6 })); // Fetch 6 portfolios for featured work
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/portfolio/${id}`); // Navigate to portfolio detail page
  };

  return (
    <div className='max-w-screen-xl mx-auto mt-20'>
      <h1 className='w-full lg:text-start md:text-center text-center text-3xl font-semibold mb-10'>Featured Work</h1>
      <p className='font-semibold w-full lg:text-end mb-20 text-xl md:text-center text-center'>
        We are an award-winning creative & <br /> design agency committed to <br /> excellence since forever.
      </p>

      {/* Gallery Section */}
      <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 px-4'>
        {isSuccess && portfolios.length > 0 ? (
          portfolios.map((item) => (
            <div
              key={item.id}
              className='relative group cursor-pointer overflow-hidden rounded-lg'
              onClick={() => handleNavigate(item.id)} // Navigate to detail page on click
            >
              <img src={item.banner} alt={item.title} className='w-full h-auto object-cover transform transition-transform duration-300 group-hover:scale-110' />
              {/* Hover Effect */}
              <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                <span className='text-white text-lg font-semibold'>{item.title}</span>
              </div>
            </div>
          ))
        ) : error ? (
          <div className='text-red-500 text-center'>Failed to load portfolios</div>
        ) : (
          <div className='text-center'>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default FeatureWorkComponent;
