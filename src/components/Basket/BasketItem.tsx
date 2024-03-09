import { useState } from "react";
import BasketItemModel from "../../types/models/BasketItemModel.interface";
import './style.css';

interface BasketItemProps {
  basketItem: BasketItemModel;
  changeQuantity: (id: number, quantity: number) => void;
}

const BasketItem = ({basketItem, changeQuantity}: BasketItemProps) => {
  const [quantity, setQuantity] = useState(basketItem.quantity);
  const pricePerUnit = basketItem.product.price;
  const totalPrice = (quantity * pricePerUnit).toFixed(2);

  const handleIncreaseQuantity = () => {
    changeQuantity(basketItem.id, quantity + 1);
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      changeQuantity(basketItem.id, quantity - 1);
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-basket-details">
      <img src={basketItem.product.image} alt="strawberry" />
      <div className="product-details-info">
        <h3>Strawberry</h3>
        <span className='product-description'>Вес: 200 гр.</span>
      </div>
      <div className="quantity-controls">
        <button onClick={handleDecreaseQuantity}>-</button>
        <span className='quantity-basket'>{quantity}</span>
        <button onClick={handleIncreaseQuantity}>+</button>
      </div>
      <span className='product-price-basket'>Цена: {totalPrice} ₽</span>
    </div>
  )
}

export default BasketItem;
