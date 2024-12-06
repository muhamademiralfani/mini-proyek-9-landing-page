import React from 'react';
import BannerComponent from '../components/BannerComponent';
import DetailBlogArticleComponent from '../components/DetailBlogComponent/DetailBlogArticleComponent';

const DetailBlogPage = () => {
  return (
    <>
      <BannerComponent>We write article with love.</BannerComponent>
      <DetailBlogArticleComponent />
    </>
  );
};

export default DetailBlogPage;
