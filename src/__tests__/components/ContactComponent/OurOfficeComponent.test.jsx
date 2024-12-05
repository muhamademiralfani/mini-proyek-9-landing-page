/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import OurOfficeComponent from '../../../components/ContactComponent/OurOfficeComponent';

describe('OurOfficeComponent', () => {
  test('renders the title', () => {
    render(<OurOfficeComponent />);
    const titleElement = screen.getByText(/Come stop by our office sometime/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the office image', () => {
    render(<OurOfficeComponent />);
    const imageElement = screen.getByAltText('Office location');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the office information', () => {
    render(<OurOfficeComponent />);

    const locationElement = screen.getByText(/New York, USA/i);
    const addressElement = screen.getByText(/7626 W. 8th St./i);
    const emailElement = screen.getByText(/info@dsgnr.com/i);

    // Menggunakan fungsi pencocokan untuk nomor telepon
    const phoneElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'span' && content.includes('(543)890 98');
    });

    expect(locationElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneElement).toBeInTheDocument();
  });

  test('renders the get directions button', () => {
    render(<OurOfficeComponent />);
    const buttonElement = screen.getByRole('button', { name: /get directions/i });
    expect(buttonElement).toBeInTheDocument();
  });
});
