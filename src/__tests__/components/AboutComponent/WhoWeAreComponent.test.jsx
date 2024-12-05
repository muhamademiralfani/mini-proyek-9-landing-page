/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// WhoWeAreComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import WhoWeAreComponent from '../../../components/AboutComponent/WhoWeAreComponent';
describe('WhoWeAreComponent', () => {
  test('renders the title', () => {
    render(<WhoWeAreComponent />);
    const titleElement = screen.getByText(/Who we are/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the description', () => {
    render(<WhoWeAreComponent />);
    const descriptionElement = screen.getByText(/We love what we do and create partnerships with our clients/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the EST. 2020 text', () => {
    render(<WhoWeAreComponent />);
    const estText = screen.getByText(/EST. 2020/i);
    expect(estText).toBeInTheDocument();
  });

  test('renders the image', () => {
    render(<WhoWeAreComponent />);
    const imageElement = screen.getByAltText(''); // Mencari gambar berdasarkan atribut alt
    expect(imageElement).toBeInTheDocument();
  });
});
