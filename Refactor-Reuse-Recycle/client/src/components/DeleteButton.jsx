import React from 'react';
import axios from 'axios';

const DeleteButton = ({ productId, successCallback }) => {
  const deleteProduct = () => {
    axios.delete(`http://localhost:5000/api/products/${productId}`)
      .then(res => { successCallback() })
      .catch(err => console.log(err));
  }

  return (
    <button onClick={deleteProduct} className="btn btn-danger">Delete</button>
  );
}

export default DeleteButton;
