import ni from '../assets/n1-min.png';
import { QTY, SIZES } from '../constants';
import { Select } from './Select';

export function ShowDetail() {
  return (
    <div className='flex flex-col lg:flex-row-reverse space-y-4'>
      {/* shoe image */}
      <div className='flex-1 lg:-mt-32 lg:ml-28 '>
        <div className='h-full flex-center bg-gradient-to-br from-[#F637CF] from-5% via-[#E3D836] via-40% to-[#4DD4C6]'>
          <img className='animate-float' src={ni} />
        </div>
      </div>
      <div className='flex-1 space-y-6 '>
        {/* show  details */}
        <div className='text-5xl font-black md:text-9xl'>Nike Air max 270</div>
        <div className='font-medium md:text-xl'>{`The Nike Air Max is a lifestyle shoe that's sure to turn heads with its vibrant color gradient.`}</div>
        <div className='flex space-x-6'>
          <div className='text-3xl font-extrabold md:text-6xl'>100 $</div>
          <Select title={'QTY'} options={QTY} />
          <Select title={'SIZE'} options={SIZES} />
        </div>

        <div className='space-x-10'>
          {/* show buttons and links */}
          <button className='h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 btn-press-anim'>
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
