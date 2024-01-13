import { useRef } from 'react';
import './style.css'

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
          <img src="../image/2sale5.jpg" alt="Image 1" />
        </div>
        <div className="scroll-item">
          <img src="Image/2sale6.jpg" alt="Image 2" />
        </div>
        <div className="scroll-item">
          <img src="Image/2sale7.jpg" alt="Image 3" />
        </div>
        <div className="scroll-item">
          <img src="Image/2sale8.jpg" alt="Image 4" />
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