import { useState } from 'react';
import { QTY, SIZES } from '../constants';
import { Select } from './Select';

export function ShowDetail({ shoe, addToCart }) {
  const [form, setForm] = useState({
    qty: null,
    size: null,
  });
  return (
    <div className='flex flex-col lg:flex-row-reverse space-y-4 dark:text-white'>
      {/* shoe image */}
      <div className='flex-1 lg:-mt-32 lg:ml-28 '>
        <div className='h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D836] via-40% to-[#4DD4C6]'>
          <img className='animate-float' src={shoe.src} />
        </div>
      </div>
      <div className='flex-1 space-y-6 '>
        {/* show  details */}
        <div className='text-5xl font-black md:text-9xl'>{shoe.title}</div>
        <div className='font-medium md:text-xl'>{shoe.description}</div>
        <div className='flex space-x-6'>
          <div className='text-3xl font-extrabold md:text-6xl'>
            {shoe.price} $
          </div>
          <Select
            onChange={(qty) => setForm({ ...form, qty: qty })}
            title={'QTY'}
            value={form.qty}
            options={QTY}
          />
          <Select
            onChange={(size) => setForm({ ...form, size: size })}
            title={'SIZE'}
            options={SIZES}
            value={form.size}
          />
        </div>

        <div className='space-x-10'>
          {/* show buttons and links */}
          <button
            onClick={() => addToCart(shoe, form.qty, form.size)}
            className='h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 btn-press-anim dark:bg-white dark:text-black'
          >
            Add to bag
          </button>
          <a
            href='#'
            className='text-lg font-bold underline underline-offset-4'
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
