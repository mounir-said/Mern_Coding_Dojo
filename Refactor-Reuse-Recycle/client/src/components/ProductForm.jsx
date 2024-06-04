import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/products', { title, price, description })
      .then(res => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          onSubmit();
          navigate("/");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <form onSubmit={onSubmitHandler} className="mt-4">
      <h2>Create a Product</h2>
      <div className="form-group">
        <label>Title</label>
        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} />
        <span className="text-danger">{errors.title ? errors.title.message : ""}</span>
      </div>
      <div className="form-group">
        <label>Price</label>
        <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} />
        <span className="text-danger">{errors.price ? errors.price.message : ""}</span>
      </div>
      <div className="form-group">
        <label>Description</label>
        <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} />
        <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ProductForm;
