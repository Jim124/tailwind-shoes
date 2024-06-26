import { useState } from 'react';
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
  return (
    <div className='p-10 xl:px-24 animate-fadeIn'>
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShowDetail />
      <NewArrivals title={'NEW ARRIVALS'} items={SHOE_LIST} />
      <Sidebar
        isOpen={isSidebarOpen}
        onCloseSidebar={() => setIsSidebarOpen(false)}
      >
        <Cart cartItems={Fake_Cart_Items} />
      </Sidebar>
    </div>
  );
}

export default App;
