import NickLogo from '../assets/nike-logo.svg?react';
import { RxHamburgerMenu } from 'react-icons/rx';

const ROUTES = ['Home', 'About', 'Services', 'Pricing', 'Contact'];
export function Nav() {
  return (
    <nav className='flex flex-wrap justify-between items-center'>
      {/* logo */}
      <a>
        <NickLogo className=' h-20 w-20' />
      </a>
      {/* burger button */}
      <button className='hover:bg-gray-100 p-2 focus:ring-2 focus:ring-gray-200  rounded-lg'>
        <RxHamburgerMenu size={25} />
      </button>
      {/* menu list */}
      <div className='w-full'>
        <ul className='bg-gray-50 text-lg border border-gray-100 rounded-lg p-4'>
          {ROUTES.map((route, index) => (
            <li
              className={`rounded cursor-pointer px-3 py-2 mb-1 ${index === 0 ? 'bg-blue-500 text-white' : 'hover:bg-gray-100'}`}
              key={route}
            >
              {route}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
