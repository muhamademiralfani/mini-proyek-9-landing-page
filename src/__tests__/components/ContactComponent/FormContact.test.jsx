/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// FormContact.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import FormContact from '../../../components/ContactComponent/FormContact';
describe('FormContact', () => {
  test('renders the contact image', () => {
    render(<FormContact />);
    const imageElement = screen.getByAltText('Contact');
    expect(imageElement).toBeInTheDocument();
  });

  test('renders the title', () => {
    render(<FormContact />);
    const titleElement = screen.getByText((content, element) => {
      return element.tagName.toLowerCase() === 'h1' && content.includes('We’d love to hear');
    });
    expect(titleElement).toBeInTheDocument();
  });

  test('renders the form fields', () => {
    render(<FormContact />);

    const nameInput = screen.getByPlaceholderText('Name*');
    const emailInput = screen.getByPlaceholderText('Email*');
    const websiteInput = screen.getByPlaceholderText('Website URL*');
    const projectDetailsTextarea = screen.getByPlaceholderText('Project Details*');
    const submitButton = screen.getByRole('button', { name: /Send Proposal/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(websiteInput).toBeInTheDocument();
    expect(projectDetailsTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
