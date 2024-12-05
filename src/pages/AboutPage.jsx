/* eslint-disable no-unused-vars */
import React from 'react';
import BannerAboutComponent from '../components/AboutComponent/BannerComponent';
import WhoWeAreComponent from '../components/AboutComponent/WhoWeAreComponent';
import TeamsComponent from '../components/AboutComponent/TeamsComponent';
import MaterixBanner from '../components/MaterixBanner';
import NavbarLayout from '../layouts/NavbarLayouts';
import ClientPartnerComponent from '../components/ClientPatnerComponent';
import FooterLayouts from '../layouts/FooterLayouts';

const AboutPage = () => {
  return (
    <>
      <NavbarLayout />
      <BannerAboutComponent />
      <WhoWeAreComponent />
      <TeamsComponent />  
      <MaterixBanner />
      <ClientPartnerComponent />
     
    </>
  );
};

export default AboutPage;
