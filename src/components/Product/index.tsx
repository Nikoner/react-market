// import { useEffect, useState } from 'react';
// import './style.css';

// interface ProductModel {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   rating: number;
//   brand: string;
//   category: string;
//   image: string;
// }
// const Product = () => {
//   const [products, setProducts] = useState<ProductModel[]>([]);

//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then((res) => res.json() as Promise<ProductModel[]>)
//       .then(data => setProducts(data))
//   }, []);

//   return (
    // <div className="content">
    //   <div className="product">
    //     <img src="../image/strawberry.png" alt="" className="product-image" />
    //     <div className="product-details">
    //       <h3>Product 1</h3>
    //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    //       <div className="product-details">
    //         <button>В корзину</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>

//   <div className="product-content">
//   {products.map((product) => (
//     <div className="product" key={product.id}>
//       <img src={product.image} alt={product.title} className="product-image" />
//       <div className="product-details">
//         <h3>{product.title}</h3>
//         <p>{product.description}</p>
//         <div className="product-details">
//           <button>В корзину</button>
//         </div>
//       </div>
//     </div>
//   ))}
//   </div>
//   )
// }

// export default Product;