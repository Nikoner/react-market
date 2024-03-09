import { useState } from 'react';
import strawberry from '../../assets/images/strawberry.png';
import BasketItem from './basketItem';
import './style.css';

const basketItems = [
  {
    id: 1,
    quantity: 1,
    product: {
      title: 'Strawberry',
      image: strawberry,
      price: 200
    }
  },
  {
    id: 2,
    quantity: 1,
    product: {
      title: 'Strawberry',
      image: strawberry,
      price: 200
    }
  }
]

const Basket = () => {
  const [items, setItems] = useState(basketItems);
  const totalPriceAllGoods = () => {
    return items.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  const changeQuantity = (id: number, quantity: number) => {
    setItems(items.map(item => item.id === id ? { ...item, quantity } : item))
  }

  return (
    <div className="basket-container">
      <div className="basket-products-cart">
        {basketItems.map((item) => (
          <BasketItem key={item.id} basketItem={item} changeQuantity={changeQuantity}/>
        ))}
      </div>
      <div className="purchase-basket">
        <div className="total-price-basket">
          <p>Итоговая стоимость: {totalPriceAllGoods()} ₽</p>
        </div>
        <div className='basket-purchase-button-container'>
          <button className='purchase-button-basket'>Оформить заказ</button>
        </div>
      </div>
    </div>
  )
}

export default Basket;
