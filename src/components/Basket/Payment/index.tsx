import './style.css';
import { useState } from 'react';


const Payment = () => {

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
    <div className='payment-product'>
      <div className="product-quantity">
        <button onClick={handleIncrease}>+</button>
        <span>Количество: {quantity}</span>
        <button onClick={handleDecrease}>-</button>
      </div>
      <div className="purchase-buttons">
      <span>Стоимость: {totalPrice} руб</span>
        <button>Оплатить</button>
        <button>Удалить</button>
      </div>
    </div>
  )
}

export default Payment;