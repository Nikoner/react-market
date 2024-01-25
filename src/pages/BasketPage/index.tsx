import Basket from '../../components/Basket';
import './style.css'

const BasketPage = () => {
  return (
    <div className='purchase-container'>
      <h1>Ваша корзина</h1>
      <Basket />
    </div>
  )
}

export default BasketPage;