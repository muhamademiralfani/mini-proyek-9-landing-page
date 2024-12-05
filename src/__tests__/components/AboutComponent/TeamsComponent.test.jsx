/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TeamsComponent from '../../../components/AboutComponent/TeamsComponent';
describe('TeamsComponent', () => {
  test('renders the header', () => {
    render(
      <Router>
        <TeamsComponent />
      </Router>
    );

    const headerElement = screen.getByText(/Meet the heroes behind the magic/i);
    expect(headerElement).toBeInTheDocument();
  });

  test('renders the articles list', () => {
    render(
      <Router>
        <TeamsComponent />
      </Router>
    );

    const articles = screen.getAllByRole('article');
    expect(articles.length).toBe(3); // Pastikan ada 3 artikel
  });

  test('renders article titles and descriptions', () => {
    render(
      <Router>
        <TeamsComponent />
      </Router>
    );

    const titleElement1 = screen.getByText(/Building a stronger brand with no-code tools/i);
    const titleElement2 = screen.getByText(/Copywriters and designers: How to work better together/i);
    const titleElement3 = screen.getByText(/A guide to photography website design/i);

    expect(titleElement1).toBeInTheDocument();
    expect(titleElement2).toBeInTheDocument();
    expect(titleElement3).toBeInTheDocument();

    const descElement1 = screen.getByText(/Learn about taking on a content design mindset from an expert in brand strategy and content design./i);
    const descElement2 = screen.getByText(/Good design and good copy go hand in hand. Here’s how to build closer collaboration between these two./i);
    const descElement3 = screen.getByText(/A collection of resources for photography website design covering everything/i);

    expect(descElement1).toBeInTheDocument();
    expect(descElement2).toBeInTheDocument();
    expect(descElement3).toBeInTheDocument();
  });

  test('renders READ MORE links', () => {
    render(
      <Router>
        <TeamsComponent />
      </Router>
    );

    const readMoreLinks = screen.getAllByText(/READ MORE/i);
    expect(readMoreLinks.length).toBe(3); // Pastikan ada 3 tautan "READ MORE"
  });
});
