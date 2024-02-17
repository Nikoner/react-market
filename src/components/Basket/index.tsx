import { useState } from 'react';
import strawberry from '../../assets/images/strawberry.png';
import './style.css';

const Basket = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerItem = 500;

  const handleDecrease = () => {
    if (quantity >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  
  const totalPrice = quantity * pricePerItem;

  return (
    <div className="basket-container">
      <div className="product-details">
        <img src={strawberry} alt="strawberry" />
        <div className="product-details-info">
          <h2>Strawberry</h2>
        </div>
        <div className="product-quantity">
          <button onClick={handleIncrease}>+</button>
          <span>Количество: {quantity}</span>
          <button onClick={handleDecrease}>-</button>
          <span className="total-price">Стоимость: {totalPrice} руб</span>
        </div>
      </div>
      <div className="product-details">
        <img src={strawberry} alt="strawberry" />
        <div className="product-details-info">
          <h2>Strawberry</h2>
        </div>
        <div className="product-quantity">
          <button onClick={handleIncrease}>+</button>
          <span>Количество: {quantity}</span>
          <button onClick={handleDecrease}>-</button>
          <span className="total-price">Стоимость: {totalPrice} руб</span>
        </div>
      </div>
      <div className="product-details">
        <img src={strawberry} alt="strawberry" />
        <div className="product-details-info">
          <h2>Strawberry</h2>
        </div>
        <div className="product-quantity">
          <button onClick={handleIncrease}>+</button>
          <span>Количество: {quantity}</span>
          <button onClick={handleDecrease}>-</button>
          <span className="total-price">Стоимость: {totalPrice} руб</span>
        </div>
      </div>
    </div>
  )
}

export default Basket;