// FooterLayouts.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import FooterLayouts from '../../layouts/FooterLayouts';

describe('FooterLayouts', () => {
  test('renders the footer title', () => {
    render(<FooterLayouts />);
    const titleElement = screen.getByText(/dsgn.r./i);
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the description', () => {
    render(<FooterLayouts />);
    const descriptionElement = screen.getByText(/Dsgnr. is an award winning creative and design agency/i);
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders the email address', () => {
    render(<FooterLayouts />);
    const emailElement = screen.getByText(/info@dsgnr.com/i);
    expect(emailElement).toBeInTheDocument();
  });

  test('renders the navigation links', () => {
    render(<FooterLayouts />);
    const navLinks = ['What We Do', 'Intro', 'Home', 'Work', 'Pricing', 'Contact Us', 'Who We Are', 'About', 'News', 'Testimonials'];

    navLinks.forEach((link) => {
      const linkElement = screen.getByText(link);
      expect(linkElement).toBeInTheDocument();
    });
  });

  test('renders social media icons', () => {
    render(<FooterLayouts />);
    const socialIcons = screen.getAllByAltText('');
    expect(socialIcons.length).toBe(4); // Perbarui jumlah ikon media sosial yang diharapkan
  });

  test('renders the privacy policy and terms links', () => {
    render(<FooterLayouts />);
    const privacyPolicyLink = screen.getByText(/Privacy Policy/i);
    const termsLink = screen.getByText(/Terms/i);

    expect(privacyPolicyLink).toBeInTheDocument();
    expect(termsLink).toBeInTheDocument();
  });

  test('renders the made with love text', () => {
    render(<FooterLayouts />);
    const madeWithLoveElement = screen.getByText(/Made with ❤ by movin/i);
    expect(madeWithLoveElement).toBeInTheDocument();
  });
});
