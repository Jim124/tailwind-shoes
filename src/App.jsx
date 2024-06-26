import { BiMoon } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { NewArrivals } from './components/NewArrivals';
import { Sidebar } from './components/Sidebar';
import { ShowDetail } from './components/ShowDetail';
import { SHOE_LIST } from './constants';
import { Cart } from './components/Cart';

const Fake_Cart_Items = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode) {
      window.document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'isDarkMode',
      window.document.documentElement.classList.contains('dark')
    );
  };
  return (
    <div className='p-10 xl:px-24 animate-fadeIn dark:bg-night'>
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShowDetail shoe={currentShoe} />
      <NewArrivals
        title={'NEW ARRIVALS'}
        items={SHOE_LIST}
        onClickCard={setCurrentShoe}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={Fake_Cart_Items} />
      </Sidebar>
      <div className='fixed bottom-4 right-4'>
        <button
          onClick={toggleDarkMode}
          className='bg-night-50 shadow-lg px-4 py-2 rounded-full text-white dark:bg-white dark:text-night'
        >
          <BiSun className='hidden dark:block' />
          <BiMoon className='dark:hidden' />
        </button>
      </div>
    </div>
  );
}

export default App;
