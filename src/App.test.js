import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "Count:"', () => {
  render(<App />);
  const countElement = screen.getByText(/Count:/i);
  expect(countElement).toBeInTheDocument();
});
