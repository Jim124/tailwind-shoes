import { BiMoon } from 'react-icons/bi';
import { BiSun } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { Nav } from './components/Nav';
import { NewArrivals } from './components/NewArrivals';
import { Sidebar } from './components/Sidebar';
import { ShowDetail } from './components/ShowDetail';
import { SHOE_LIST } from './constants';
import { Cart } from './components/Cart';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const isDarkMode = localStorage.getItem('isDarkMode');
    if (isDarkMode) {
      window.document.documentElement.classList.add('dark');
    }
  }, []);

  // toggle Dark Mode
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle('dark');
    localStorage.setItem(
      'isDarkMode',
      window.document.documentElement.classList.contains('dark')
    );
  };

  // add product to cart
  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.product.id === product.id
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].size = size;
        updatedCartItems[existingItemIndex].qty = qty;
      } else {
        updatedCartItems.push({ product, qty, size });
      }
      setCartItems(updatedCartItems);
    }
  };

  // remove product from cart
  const removeFromCart = (productId) => {
    const updatedCartItems = [...cartItems];
    const index = updatedCartItems.findIndex(
      (item) => item.product.id === productId
    );
    updatedCartItems.splice(index, 1);
    // const updatedCartItems = cartItems.filter(
    //   (item) => item.product.id !== productId
    // );
    setCartItems(updatedCartItems);
  };
  return (
    <div className='p-10 xl:px-24 animate-fadeIn dark:bg-night'>
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShowDetail shoe={currentShoe} addToCart={addToCart} />
      <NewArrivals
        title={'NEW ARRIVALS'}
        items={SHOE_LIST}
        onClickCard={setCurrentShoe}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
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
