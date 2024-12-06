import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchPortfolioDetail, fetchPortfolios } from '../../redux/async/portfolioSlice';

const OurWorkComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { portfolios, isSuccess, error } = useSelector((state) => state.portfolios);

  useEffect(() => {
    dispatch(fetchPortfolios({ page: 1, limit: 20 }));
  }, [dispatch]);

  const handleNavigate = (id) => {
    dispatch(fetchPortfolioDetail(id));
    navigate(`/portfolio/${id}`); // Navigate to detail page
  };

  return (
    <div>
      <div className='max-w-screen-xl mx-auto flex justify-center items-center mt-[176px]'>
        <h1 className='text-3xl font-semibold'>Our Work So Far</h1>
      </div>

      {/* Gallery Section */}
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-2 px-2 mt-[129px] grid-flow-row-dense'>
        {isSuccess && portfolios.length > 0 ? (
          portfolios.map((item) => (
            <div
              key={item.id}
              className='relative group flex justify-center items-center min-h-[300px] cursor-pointer'
              onClick={() => handleNavigate(item.id)} // Navigate to detail page on click
            >
              <img src={item.banner} alt={`gallery-${item.id}`} className='w-full h-auto max-h-[300px] object-cover' />
              {/* Hover Effect */}
              <div className='absolute bottom-0 left-0 w-full bg-black bg-opacity-50 h-[20%] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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

export default OurWorkComponent;
