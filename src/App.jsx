/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import OurworkPage from './pages/OurworkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BannerBussinessComponent from './components/BannerBussinessComponent';
import FooterLayouts from './layouts/FooterLayouts';
import NavbarLayouts from './layouts/NavbarLayouts';
import DetailWorkPage from './pages/DetailWorkPage';
import BlogPage from './pages/BlogPage';
import DetailBlogPage from './pages/DetailBlogPage';

const App = () => {
  return (
    <Router>
      <NavbarLayouts />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/work' element={<OurworkPage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/blogs/:slug' element={<DetailBlogPage />} />
        <Route path='/portfolio/:id' element={<DetailWorkPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
      <BannerBussinessComponent />
      <FooterLayouts />
    </Router>
  );
};

export default App;
