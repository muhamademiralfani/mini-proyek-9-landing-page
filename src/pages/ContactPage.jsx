/* eslint-disable no-unused-vars */
import React from 'react';
import FormContact from '../components/ContactComponent/FormContact';
import OurOfficeComponent from '../components/ContactComponent/OurOfficeComponent';
import Hand from '../assets/hand-baner.png';
import BannerComponent from '../components/BannerComponent';
import MaterixBanner from '../components/MaterixBanner';
import ClientPartnerComponent from '../components/ClientPatnerComponent';

const ContactPage = () => {
  return (
    <><BannerComponent />
      <FormContact />
      <OurOfficeComponent />
      <MaterixBanner />
      <ClientPartnerComponent />
    </>
  );
};

export default ContactPage;
