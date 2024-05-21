import React from 'react'
// import test, {   expect } from 'node:test';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
// console.log("testing");

// import test, { describe, expect } from 'node:test';
// import { sum } from './sum';

// describe('sum', function () {
//   test('positive', () => {
//     expect(sum(5, 5)).toBe(10);
//   });
// });
