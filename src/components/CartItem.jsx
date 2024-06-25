import { CiTrash } from 'react-icons/ci';
import { Select } from './Select';
import { QTY, SIZES } from '../constants';

export function CartItem({ item }) {
  return (
    <div className='hover:bg-[#DAFFA2] p-2 cursor-pointer bg-gray-50  space-y-2 mt-5'>
      <div className='flex space-x-2 '>
        {/* image */}
        <img className='h-24' src={item.src} />
        {/* title and description */}
        <div className='space-y-2'>
          <div className='font-bold'>{item.title}</div>
          <div className='text-sm ttext-gray-400'>{item.description}</div>
        </div>
        {/* price */}
        <div className='font-bold'>{item.price}</div>
      </div>
      <div className='flex justify-between '>
        <div className='flex space-x-6 pl-32'>
          <div>
            <div className='font-bold'>SIZES</div>
            <Select title={''} options={SIZES} className={`w-16 p-1`} />
          </div>
          <div>
            <div className='font-bold'>QTY</div>
            <Select title={''} options={QTY} className={`w-16 p-1`} />
          </div>
        </div>
        <button>
          <CiTrash size={25} className='text-black' />
        </button>
      </div>
    </div>
  );
}
