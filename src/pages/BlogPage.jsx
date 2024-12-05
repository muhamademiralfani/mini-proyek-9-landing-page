/* eslint-disable no-unused-vars */
import React from 'react';
import BannerComponent from '../components/BannerComponent';
import ArticlesListComponent from '../components/ArticlesListComponent';

const BlogPage = () => {
  return (
    <>
      <BannerComponent>Read best articles from us.</BannerComponent>
      <ArticlesListComponent />
    </>
  );
};

export default BlogPage;
