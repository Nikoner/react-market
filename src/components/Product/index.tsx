// import { useEffect, useState } from 'react';
import './style.css';

const Product = () => {
  // const [products, setProducts] = useState(0);

  // useEffect(() => {
  //   fetch ('https://fakestoreapi.com/products')
  //   .then(res => res.json()) as Promise<any>;
  //   .then (data => setProducts(data))
  // })

  return (
    <div className="content">
      <div className="product">
        <img src="../image/strawberry.png" alt="" className="product-image" />
        <div className="product-details">
          <h3>Product 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="product-details">
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product;