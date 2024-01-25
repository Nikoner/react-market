import './style.css';
import strawberry from '../../assets/images/strawberry.png';
import Payment from './Payment';

const Basket = () => {

  return (
    <div className="basket-container">
      <div className="product-details">
        <img src={strawberry} alt="strawberry" />
        <div className="product-details-info">
          <h2>Strawberry</h2>
          <span className='product-description'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iste minus laudantium incidunt facere perferendis velit esse nesciunt beatae minima, sequi pariatur molestias sapiente non odio mollitia repellat corrupti sunt.</span>
        </div>
      </div>
      <Payment />
    </div>
  )
}

export default Basket;