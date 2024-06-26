import { CiTrash } from 'react-icons/ci';
import { Select } from './Select';
import { QTY, SIZES } from '../constants';

export function CartItem({ item: { product, size, qty }, removeFromCart }) {
  return (
    <div className='hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50  space-y-2 dark:bg-transparent dark:hover:bg-night-50 '>
      <div className='flex space-x-2 '>
        {/* image */}
        <img className='h-24' src={product.src} />
        {/* title and description */}
        <div className='space-y-2'>
          <div className='font-bold dark:text-white'>{product.title}</div>
          <div className='text-sm ttext-gray-400 dark:text-white'>
            {product.description}
          </div>
        </div>
        {/* price */}
        <div className='font-bold dark:text-white'>{product.price}</div>
      </div>
      <div className='flex justify-between '>
        <div className='flex space-x-6 pl-32'>
          <div>
            <div className='font-bold dark:text-white'>SIZES</div>
            <Select
              title={''}
              options={SIZES}
              className={`w-16 p-1 pl-2`}
              value={size}
            />
          </div>
          <div>
            <div className='font-bold dark:text-white'>QTY</div>
            <Select
              title={''}
              options={QTY}
              className={`w-16 p-1`}
              value={qty}
            />
          </div>
        </div>
        <button onClick={removeFromCart.bind(this, product.id)}>
          <CiTrash size={25} className='text-black dark:text-white' />
        </button>
      </div>
    </div>
  );
}
