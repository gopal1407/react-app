import { useCart } from './CartContext';

export default function Product({ name }) {
  const { addToCart } = useCart();
  return <button onClick={() => addToCart(name)}>Add {name}</button>;
}
