import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders count and increments on click', () => {
  render(<Counter />);
  expect(screen.getByText(/count: 0/i)).toBeInTheDocument();

  fireEvent.click(screen.getByText(/increment/i));
  expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
});
