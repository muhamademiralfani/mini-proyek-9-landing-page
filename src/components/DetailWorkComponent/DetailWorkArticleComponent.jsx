import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPortfolioDetail } from '../../redux/async/portfolioSlice';
import parse from 'html-react-parser';

const DetailWorkArticleComponent = () => {
  const { id } = useParams(); // Mendapatkan ID dari URL
  const dispatch = useDispatch();
  const { portfolio, isSuccess, error } = useSelector((state) => state.portfolios);

  useEffect(() => {
    if (id) {
      dispatch(fetchPortfolioDetail(id)); // Fetch detail portfolio berdasarkan ID
    }
  }, [dispatch, id]);

 
  return (
    <section className='max-w-screen-lg mx-auto px-4 md:px-8 lg:px-16 py-10 mb-40'>
      {isSuccess && portfolio ? (
        <>
          {/* Image Section */}
          <div className='w-full h-auto overflow-hidden rounded-lg mb-8'>
            <img src={portfolio.banner} alt={`Banner of ${portfolio.title}`} className='w-full h-full object-cover' />
          </div>

          {/* Article Content */}
          <div className='space-y-6'>
            {/* Title */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>{portfolio.title}</h1>

            {/* Metadata */}
            <p className='text-gray-500 text-sm'>Published on {new Date(portfolio.created_at).toLocaleDateString()}</p>

            {/* Content */}
            <div className='text-gray-700 text-base md:text-lg leading-relaxed'>{parse(portfolio.content)}</div>
          </div>
        </>
      ) : error ? (
        <div className='text-red-500 text-center'>Failed to load portfolio details</div>
      ) : (
        <div className='text-center'>Loading...</div>
      )}
    </section>
  );
};

export default DetailWorkArticleComponent;
