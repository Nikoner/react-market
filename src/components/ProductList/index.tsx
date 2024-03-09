// import Product from '../Product';
// import './style.css';

// const ProductList = () => {
//   return (
//     <div className="product-list-content">
//       <Product />
//     </div>
//   )
// }

// export default ProductList;

import { useEffect, useState } from 'react';
import ProductModel from '../../types/models/ProductModel.interface';
import './style.css';

const Product = () => {
  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json() as Promise<ProductModel[]>)
      .then(data => setProducts(data))
  }, []);

  const limitSymbol = (text: string, limit: number) => {
    if (text.length > limit) {
      return text.substring(0, limit) + '...';
    }
    return text;
  };

  return (

  <div className="product-list">
  {products.map((product) => (
    <div className="product" key={product.id}>
      <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image" />
        <div>
          <h3>{limitSymbol(product.title, 30)}</h3>
          <p>{limitSymbol(product.description, 100)}</p>
          <div className="product-buttons">
            <button>В корзину</button>
          </div>
        </div>
      </div>
    </div>
  ))}
  </div>
  )
}

export default Product;
