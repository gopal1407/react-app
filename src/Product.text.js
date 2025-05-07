import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import Product from './Product';

function CartDisplay() {
  const { cart } = useCart();
  return (
    <ul>
      {cart.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

test('adds product to cart', () => {
  render(
    <CartProvider>
      <Product name="Laptop" />
      <CartDisplay />
    </CartProvider>
  );

  fireEvent.click(screen.getByText(/add laptop/i));
  expect(screen.getByText(/laptop/i)).toBeInTheDocument();
});
