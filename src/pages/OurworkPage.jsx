/* eslint-disable no-unused-vars */
import React from 'react';
import BannerWorkComponent from '../components/OurWorkComponent/BannerWorkComponent';
import FeatureWorkComponent from '../components/OurWorkComponent/FeatureWorkComponent';
import ClientPartnerComponent from '../components/ClientPatnerComponent';
import BannerBussinessComponent from '../components/BannerBussinessComponent';
import FooterLayouts from '../layouts/FooterLayouts';
import BannerComponent from '../components/BannerComponent';

const OurworkPage = () => {
  return (
    <>
      <BannerComponent />
      <FeatureWorkComponent />
      <ClientPartnerComponent />
      <BannerBussinessComponent />
      <FooterLayouts />
    </>
  );
};

export default OurworkPage;
