import React from 'react';
import Banner from '../../assets/Banner.png';
import HeroElement from '../../assets/hero-elements.svg';

const BannerHomeComponent = () => {
  return (
    <div className="relative">
      {/* Banner Section */}
      <section
        className="w-screen h-screen bg-primary overflow-hidden flex items-center"
        style={{
          backgroundImage: `url(${Banner})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        aria-labelledby="banner-heading">
        <div className="w-screen h-full flex justify-center">
          <div className="max-w-screen-xl mx-auto">
            <div className="relative z-10 flex flex-col md:justify-center lg:justify-stretch justify-center h-full">
              {/* Heading Section */}
              <header className="lg:p-32 md:p-16 p-8">
                <h1
                  id="banner-heading"
                  className="text-start text-4xl md:text-6xl lg:text-8xl font-bold leading-tight">
                  Let’s create <br /> something great together.
                </h1>
              </header>
              {/* Call to Action */}
              <div className="lg:px-32 lg:py-10 md:px-16 p-8">
                <div className="relative group">
                  <div className="h-14 w-14 bg-white rounded-full flex items-center justify-center">
                  </div>
                  <h2
                    className="absolute inset-0 z-0 top-4 left-6 font-semibold text-lg md:text-xl transition-all"
                    aria-label="Book a free call">
                    Book A Free Call
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Element */}
        <div className="absolute h-screen inset-0 z-0 flex justify-end items-end lg:items-start w-full">
          <img src={HeroElement} alt="Decorative hero element" className="h-50 w-full overflow-hidden" />
        </div>
      </section>
    </div>
  );
};

export default BannerHomeComponent;
