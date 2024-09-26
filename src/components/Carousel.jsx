import { useState, useEffect } from 'react';
import './Carousel.css';

const images = ['/restaurantes-de-lujo.jpg'];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
    </div>
  );
}

export default Carousel;
