/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// MaterixBanner.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import MaterixBanner from '../../components/MaterixBanner';

describe('MaterixBanner', () => {
  test('renders all data items correctly', () => {
    render(<MaterixBanner />);

    const dataItems = [
      { title: '350 +', des: 'Clients Worldwide' },
      { title: '20 +', des: 'Team Members' },
      { title: '100 +', des: 'Projects Completed' },
      { title: '85M +', des: 'Revenue Generated' },
    ];

    dataItems.forEach(item => {
      const titleElement = screen.getByText(item.title);
      const descriptionElement = screen.getByText(item.des);
      expect(titleElement).toBeInTheDocument();
      expect(descriptionElement).toBeInTheDocument();
    });
  });

  test('renders the banner with correct styles', () => {
    const { container } = render(<MaterixBanner />);
    expect(container.firstChild).toHaveClass('w-full bg-black py-8');
  });
});
