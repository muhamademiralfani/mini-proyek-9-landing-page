import React from 'react';
import ArticleImage_1 from '../../assets/articleslist/articlesimage-1.svg';
import ArticleImage_2 from '../../assets/articleslist/articlesimage-2.svg';
import ArticleImage_3 from '../../assets/articleslist/articlesimage-3.svg';
import { Link } from 'react-router-dom';

const ArticlesList = () => {
  const articlesList = [
    {
      title: 'Building a stronger brand with no-code tools',
      desc: 'Learn about taking on a content design mindset from an expert in brand strategy and content design.',
      img: ArticleImage_1,
    },
    {
      title: 'Copywriters and designers: How to work better together',
      desc: 'Good design and good copy go hand in hand. Here’s how to build closer collaboration between these two.',
      img: ArticleImage_2,
    },
    {
      title: 'A guide to photography website design',
      desc: 'A collection of resources for photography website design covering everything',
      img: ArticleImage_3,
    },
  ];

  return (
    <section className='py-16 px-4 bg-gray-50'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Header Section */}
        <div className='flex flex-col sm:flex-row justify-between items-center mb-12'>
          <h1 className='text-3xl md:text-4xl lg:ml-20 md:ml-0 ml-0 text-center font-bold text-gray-900 mb-4 sm:mb-0'>Check out our interesting articles</h1>
          <Link to='/articles' className='group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors'>
            <span className='font-semibold uppercase'>See All</span>
          </Link>
        </div>

        {/* Articles Grid */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20'>
          {articlesList.map((item, index) => (
            <article key={index} className='bg-white  overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
              {/* Image Container */}
              <div className='aspect-auto overflow-hidden p-6'>
                <img src={item.img} alt={item.title} className='w-full h-full object-cover hover:scale-105 transition-transform duration-300' />
              </div>

              {/* Content Container */}
              <div className='p-6 flex flex-col gap-4'>
                <h3 className='text-xl font-bold text-gray-900 line-clamp-2 hover:text-blue-600 transition-colors'>{item.title}</h3>
                <p className='text-gray-600 line-clamp-3'>{item.desc}</p>
                <Link to={`/article/${index}`} className='inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 mt-2 group'>
                  READ MORE
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesList;
