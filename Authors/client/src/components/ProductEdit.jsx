import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => {
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch(err => console.log(err))
  }, [id]);

  const onSubmitHandler = e => {
    e.preventDefault();
    axios.put(`http://localhost:5000/api/products/${id}`, { title, price, description })
      .then(res => {
        if (res.data.errors) {
          setErrors(res.data.errors);
        } else {
          navigate("/");
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmitHandler}>
        <h2>Update A Product</h2>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
          <span className="text-danger">{errors.title ? errors.title.message : ""}</span>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)} value={price} />
          <span className="text-danger">{errors.price ? errors.price.message : ""}</span>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} />
          <span className="text-danger">{errors.description ? errors.description.message : ""}</span>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default ProductEdit;
