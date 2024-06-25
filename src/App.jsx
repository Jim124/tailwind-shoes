import { Nav } from './components/Nav';
import { NewArrivals } from './components/NewArrivals';
import { ShowDetail } from './components/ShowDetail';
import { SHOE_LIST } from './constants';
function App() {
  return (
    <div className='p-10 xl:px-24 animate-fadeIn'>
      <Nav />
      <ShowDetail />
      <NewArrivals title={'NEW ARRIVALS'} items={SHOE_LIST} />
    </div>
  );
}

export default App;
