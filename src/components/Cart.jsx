import { CartItem } from './CartItem';

export function Cart({ cartItems }) {
  return (
    <>
      <h2 className='mb-5 text-4xl font-bold'>Cart</h2>
      <ul className='space-y-5'>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            <CartItem item={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
