import { render, screen } from '@testing-library/react';
import App from './App';

test('renders input text', () => {
  render(<App />);
  const inputElement = document.getElementsByClassName("task")[0];
  expect(inputElement).toBeInTheDocument();
});
