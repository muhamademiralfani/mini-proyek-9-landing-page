/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// BannerBussinessComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import BannerBussinessComponent from '../../../components/BannerBussinessComponent';

describe('BannerBussinessComponent', () => {
  test('renders the business logo', () => {
    render(<BannerBussinessComponent />);
    const logoElement = screen.getByAltText('');
    expect(logoElement).toBeInTheDocument();
  });

  test('renders the hands image', () => {
    render(<BannerBussinessComponent />);
    const handsImageElement = screen.getByAltText('hands');
    expect(handsImageElement).toBeInTheDocument();
  });

  test('renders the main heading', () => {
    render(<BannerBussinessComponent />);
    const headingElement = screen.getByText(/Grow Your Business. Build Great Products./i);
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the button', () => {
    render(<BannerBussinessComponent />);
    const buttonElement = screen.getByRole('button', { name: /Book a free call/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
