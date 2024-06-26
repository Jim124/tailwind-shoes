import { TbShoppingBag } from 'react-icons/tb';
import NickLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];
export function Nav({ onClickShoppingBtn }) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className='relative z-10 flex flex-wrap justify-between items-center'>
      {/* logo */}
      <a>
        <NickLogo className='dark:fill-white h-20 w-20' />
      </a>
      {/* burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className='hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200  rounded-lg lg:hidden dark:text-gray-400 dark:hover:bg-gray-700'
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* menu list */}
      <div
        className={`${!isMobileMenuShown && 'hidden'} w-full lg:w-auto lg:block`}
      >
        <ul className='bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4 flex flex-col lg:flex-row lg:space-x-8 lg:dark:text-white  '>
          {ROUTES.map((route, index) => (
            <li
              className={`lg:hover:bg-transparent lg:hover:text-blue-500 rounded cursor-pointer px-3 py-2 mb-1 ${index === 0 ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500' : 'hover:bg-gray-100'}
              ${(index === 3 || index === 4) && 'lg:text-white'}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* cart button */}
      <div
        onClick={onClickShoppingBtn}
        className='fixed left-4 bottom-4 lg:static lg:mr-8'
      >
        <div className='flex-center rounded-full h-12 w-12 bg-white shadow-md cursor-pointer btn-press-anim'>
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
