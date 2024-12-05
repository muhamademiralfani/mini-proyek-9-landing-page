/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ArticleImage from '../../assets/article-image.png';

const DetailBlogArticleComponent = () => {
  return (
    <section className='max-w-screen-lg mx-auto px-4 md:px-8 lg:px-16 py-10 mb-40'>
      {/* Image Section */}
      <div className='w-full h-auto overflow-hidden rounded-lg mb-8'>
        <img src={ArticleImage} alt='Article Cover' className='w-full h-full object-cover' />
      </div>

      {/* Article Content */}
      <div className='space-y-6'>
        {/* Title */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>Portfolio Title</h1>

        {/* Paragraph */}
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        {/* Section Title */}
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Why do we use it?</h2>

        {/* Paragraph */}
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
          to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many
          web sites still in their infancy.
        </p>

        {/* Section Title */}
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Where can I get some?</h2>

        {/* Paragraph */}
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Where can I get some?</h2>

        {/* Paragraph */}
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Where can I get some?</h2>

        {/* Paragraph */}
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
        <h2 className='text-2xl md:text-3xl font-semibold text-gray-900'>Where can I get some?</h2>

        {/* Paragraph */}
        <p className='text-gray-700 text-base md:text-lg leading-relaxed'>
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
          passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </section>
  );
};

export default DetailBlogArticleComponent;
