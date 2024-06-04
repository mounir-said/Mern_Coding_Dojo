import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(err => console.log("Error: ", err));
  }, [id]);

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Title: {product.title}</h3>
          <h5 className="card-text">Price: ${product.price}</h5>
          <p className="card-text">Description: {product.description}</p>
          <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
