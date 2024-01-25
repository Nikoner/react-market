import { useRef } from 'react';
import './style.css'
import sale5 from '../../assets/images/sale5.jpg';
import sale6 from '../../assets/images/sale6.jpg';
import sale7 from '../../assets/images/sale7.jpg';
import sale8 from '../../assets/images/sale8.jpg';

const Carousel = () => {
  const container = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    container.current?.scrollBy({
      left: -container.current.clientWidth,
      behavior: 'smooth'
    });
  };
  
  const scrollRight = () => {
    container.current?.scrollBy({
      left: container.current.clientWidth,
      behavior: 'smooth'
    });
  };
  return (
    <section className="slider">
      <div className="scroll-container" ref={container}>
        <div className="scroll-item">
          <img src={sale5} alt="Image 1" />
        </div>
        <div className="scroll-item">
          <img src={sale6} alt="Image 2" />
        </div>
        <div className="scroll-item">
          <img src={sale7} alt="Image 3" />
        </div>
        <div className="scroll-item">
          <img src={sale8} alt="Image 4" />
        </div>
      </div>
      <div className="scroll-button-container">
        <button className="scroll-button scroll-button-left" onClick={scrollLeft}>&#10094;</button>
        <button className="scroll-button scroll-button-right" onClick={scrollRight}>&#10095;</button>
      </div>
    </section>
  )
}

export default Carousel;