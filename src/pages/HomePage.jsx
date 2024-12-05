/* eslint-disable no-unused-vars */
import React from 'react';
import BannerHomeComponent from '../components/HomeComponent/BannerHomeComponent';
import HeroElement from '../assets/hero-elements.svg';
import InfoComponent from '../components/HomeComponent/InfoComponent';
import OurWorkComponent from '../components/HomeComponent/OurWorkComponent';
import ProcessStepComponent from '../components/HomeComponent/ProcessStepComponent';
import OurClientComponent from '../components/HomeComponent/OurClientComponent';
import ClinetPatnerComponent from '../components/HomeComponent/ClientPatnerComponent';
import ArticlesListComponent from '../components/ArticlesListComponent';
import BannerBussinessComponent from '../components/BannerBussinessComponent';
import FooterLayouts from '../layouts/FooterLayouts';
import NavbarLayouts from '../layouts/NavbarLayouts';

const HomePage = () => {
  const handleFreeCallClick = () => {
    alert('Book a free call!');
  };
  return (
    <>
      <BannerHomeComponent />
      <InfoComponent />
      <OurWorkComponent />
      <ProcessStepComponent />
      <OurClientComponent />
      <ClinetPatnerComponent />
      <ArticlesListComponent />
    </>
  );
};

export default HomePage;
