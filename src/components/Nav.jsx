import { TbShoppingBag } from 'react-icons/tb';
import NickLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];
export function Nav() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);
  return (
    <nav className='flex flex-wrap justify-between items-center'>
      {/* logo */}
      <a>
        <NickLogo className=' h-20 w-20' />
      </a>
      {/* burger button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className='hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200  rounded-lg lg:hidden'
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* menu list */}
      <div
        className={`${!isMobileMenuShown && 'hidden'} w-full lg:w-auto lg:block`}
      >
        <ul className='bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4 flex flex-col lg:flex-row lg:space-x-8  '>
          {ROUTES.map((route, index) => (
            <li
              className={`rounded cursor-pointer px-3 py-2 mb-1 ${index === 0 ? 'bg-blue-500 text-white lg:bg-transparent lg:text-blue-500' : 'hover:bg-gray-100'}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
      {/* cart button */}
      <div className='fixed left-4 bottom-4 lg:static'>
        <div className='flex-center rounded-full h-12 w-12 bg-white shadow-md '>
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
