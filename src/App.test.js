/*
The provided test code is a basic unit test for a React component using the @testing-library/react library. 
It checks whether the component renders without errors and contains an element with the text "learn react.
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
