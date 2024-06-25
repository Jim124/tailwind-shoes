import { useState } from 'react';
import { Nav } from './components/Nav';
import { NewArrivals } from './components/NewArrivals';
import { Sidebar } from './components/Sidebar';
import { ShowDetail } from './components/ShowDetail';
import { SHOE_LIST } from './constants';
import { CartItem } from './components/CartItem';
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className='p-10 xl:px-24 animate-fadeIn'>
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShowDetail />
      <NewArrivals title={'NEW ARRIVALS'} items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      >
        <h2 className='text-2xl font-bold mb-10'>Cart</h2>
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[0]} />
        <CartItem item={SHOE_LIST[0]} />
      </Sidebar>
    </div>
  );
}

export default App;
