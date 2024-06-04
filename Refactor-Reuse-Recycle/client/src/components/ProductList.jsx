import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = props => {
  const [products, setProducts] = useState([]);

  const getEverything = () => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getEverything();
  }, []);

  return (
    <div className="container">
      <h3 className="mt-4 mb-3">Product List</h3>
      {products.map(product => {
        return (
          <div className="card mb-3" key={product._id}>
            <div className="card-body">
              <h5 className="card-title">
                <Link to={`/products/${product._id}`}>Title: {product.title}</Link>
              </h5>
              <p className="card-text">
                Price: ${product.price} | Description: {product.description}
              </p>
              <Link to={`/products/${product._id}/edit`} className="btn btn-primary mr-2">
                Edit
              </Link>
              <DeleteButton productId={product._id} successCallback={() => getEverything()} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
