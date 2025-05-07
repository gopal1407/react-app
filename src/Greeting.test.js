import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Gopal" />);
  expect(screen.getByText(/hello, gopal/i)).toBeInTheDocument();
});
