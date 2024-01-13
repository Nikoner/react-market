import ProductPurchaseButton from './ProductPurchaseButton';
import './style.css';

const Product = () => {
  return (
    <div className="content">
      <div className="product">
        <img src="../image/strawberry.png" alt="" className="product-image" />
        <div className="product-details">
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <ProductPurchaseButton />
        </div>
      </div>
    </div>
  )
}

export default Product;