import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import DishGrid from './components/DishGrid';
import RestaurantInfo from './components/RestaurantInfo';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Carousel />
      <RestaurantInfo />
      <DishGrid />
      <ContactInfo />
    </div>
  );
}

export default App;
