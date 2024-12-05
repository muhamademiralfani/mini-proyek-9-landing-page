import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Gallery_1 from '../../assets/gallery/gallery-1.svg';
import Gallery_2 from '../../assets/gallery/gallery-1.svg';
import Gallery_3 from '../../assets/gallery/gallery-1.svg';
import Gallery_4 from '../../assets/gallery/gallery-1.svg';

const OurWorkComponent = () => {
  // Daftar kategori yang tersedia
  const navlist = ['All', 'Branding', 'Illustration', 'Product Design'];

  // State untuk kategori yang dipilih
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Data gambar dengan kategori masing-masing
  const galleryItems = [
    { id: 1, src: Gallery_1, category: 'Branding' },
    { id: 2, src: Gallery_2, category: 'Illustration' },
    { id: 3, src: Gallery_3, category: 'Product Design' },
    { id: 4, src: Gallery_4, category: 'Branding' },
    { id: 5, src: Gallery_1, category: 'Illustration' },
    { id: 6, src: Gallery_2, category: 'Product Design' },
    { id: 7, src: Gallery_3, category: 'Branding' },
    { id: 8, src: Gallery_4, category: 'Illustration' },
  ];

  // Fungsi untuk mengatur kategori yang dipilih
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filter gambar berdasarkan kategori yang dipilih
  const filteredGalleryItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-y-10 mt-[176px]">
        {/* Title */}
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-semibold">Our Work So Far</h1>
        </div>

        {/* Category Filter */}
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
          <div key={item.id} className="flex justify-center items-center min-h-[300px]">
            <img
              src={item.src}
              alt={`gallery-${item.id}`}
              className="w-full h-auto max-h-[300px] object-cover"
            />
          </div>
        ))}

        {/* Placeholder untuk kolom kosong */}
        {[...Array(8 - filteredGalleryItems.length)].map((_, idx) => (
          <div key={idx} className="flex justify-center items-center min-h-[300px]">
            {/* Kolom kosong tetap ada untuk menjaga grid tetap rapi */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWorkComponent;
