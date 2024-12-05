import React, { useState } from 'react';
import Gallery_1 from '../../assets/gallery/gallery-1.svg';
import Gallery_2 from '../../assets/gallery/gallery-1.svg';
import Gallery_3 from '../../assets/gallery/gallery-1.svg';
import Gallery_4 from '../../assets/gallery/gallery-1.svg';

const OurWorkComponent = () => {
  const navlist = ['All', 'Branding', 'Illustration', 'Product Design'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryItems = [
    { id: 1, src: Gallery_1, category: 'Branding', title: 'Portfolio Title 1' },
    { id: 2, src: Gallery_2, category: 'Illustration', title: 'Portfolio Title 2' },
    { id: 3, src: Gallery_3, category: 'Product Design', title: 'Portfolio Title 3' },
    { id: 4, src: Gallery_4, category: 'Branding', title: 'Portfolio Title 4' },
    { id: 5, src: Gallery_1, category: 'Illustration', title: 'Portfolio Title 5' },
    { id: 6, src: Gallery_2, category: 'Product Design', title: 'Portfolio Title 6' },
    { id: 7, src: Gallery_3, category: 'Branding', title: 'Portfolio Title 7' },
    { id: 8, src: Gallery_4, category: 'Illustration', title: 'Portfolio Title 8' },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredGalleryItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-y-10 mt-[176px]">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold">Our Work So Far</h1>
        </div>

        <div className="flex md:justify-center justify-center lg:justify-end px-4 md:px-2 items-center">
          <ul className="flex flex-wrap justify-center gap-4 py-2 text-xl font-semibold text-gray-500">
            {navlist.map((item, index) => (
              <li key={index} className="flex">
                <button
                  onClick={() => handleCategoryChange(item)}
                  className={`hover:text-blue-500 transition duration-300 whitespace-nowrap ${selectedCategory === item ? 'text-blue-500' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 sm:grid-cols-2 gap-2 px-2 mt-[129px] grid-flow-row-dense">
        {filteredGalleryItems.map(item => (
          <div key={item.id} className="relative group flex justify-center items-center min-h-[300px] cursor-pointer">
            <img
              src={item.src}
              alt={`gallery-${item.id}`}
              className="w-full h-auto max-h-[300px] object-cover"
            />
            {/* Hover Effect */}
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 h-[20%] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-lg font-semibold">{item.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkComponent;
