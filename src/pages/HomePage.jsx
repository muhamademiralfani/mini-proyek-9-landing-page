import React from 'react';
import BannerHome from '../components/HomeComponent/BannerHomeComponent';
import InfoComponent from '../components/HomeComponent/InfoComponent';
import OurWorkComponent from '../components/HomeComponent/OurWorkComponent';
import ProcessStepComponent from '../components/HomeComponent/ProcessStepComponent';
import OurClientComponent from '../components/HomeComponent/OurClientComponent';
import ClinetPatnerComponent from '../components/HomeComponent/ClinetPatnerComponent';
import ArticlesList from '../components/HomeComponent/ArticlesList';
import BannerBussinessComponent from '../components/BannerBussinessComponent';
import FooterLayouts from '../layouts/FooterLayouts';

const HomePage = () => {
  return (
    <>
      <BannerHome />
      <InfoComponent />
      <OurWorkComponent />
      <ProcessStepComponent />
      <OurClientComponent />
      <ClinetPatnerComponent />
      <ArticlesList />
      <BannerBussinessComponent />

      <FooterLayouts />
    </>
  );
};

export default HomePage;
