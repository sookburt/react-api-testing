import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 tag with title of app', () => {
  render(<App />);
  const h1Element = screen.getByText(/Welcome to Testing API Calls with MSW/i);
  expect(h1Element).toBeInTheDocument();

  
});
