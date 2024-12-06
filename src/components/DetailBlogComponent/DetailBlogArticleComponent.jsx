import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchblogDetail } from '../../redux/async/blogSlice';
import parse from 'html-react-parser';

const DetailBlogArticleComponent = () => {
  const { slug } = useParams(); // Get slug from URL
  const dispatch = useDispatch();
  const { blog, isSuccess, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    if (slug) {
      dispatch(fetchblogDetail(slug)); // Fetch blog detail using slug
    }
  }, [dispatch, slug]);

  console.log(slug);
  

  return (
    <section className='max-w-screen-lg mx-auto px-4 md:px-8 lg:px-16 py-10 mb-40'>
      {isSuccess && blog ? (
        <>
          {/* Image Section */}
          <div className='w-full h-auto overflow-hidden rounded-lg mb-8'>
            <img src={blog.banner || '/default-image.jpg'} alt={`Banner of ${blog.title}`} className='w-full h-full object-cover' />
          </div>

          {/* Article Content */}
          <div className='space-y-6'>
            {/* Title */}
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>{blog.title}</h1>

            {/* Metadata */}
            <p className='text-gray-500 text-sm'>Published on {new Date(blog.created_at).toLocaleDateString()}</p>

            {/* Content */}
            <div className='text-gray-700 text-base md:text-lg leading-relaxed'>{parse(blog.content)}</div>
          </div>
        </>
      ) : error ? (
        <div className='text-red-500 text-center'>Failed to load blog details</div>
      ) : (
        <div className='text-center'>Loading...</div>
      )}
    </section>
  );
};

export default DetailBlogArticleComponent;
