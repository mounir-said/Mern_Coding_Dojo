import React, { useState } from 'react';

const BoxGenerator = () => {
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const addBox = (e) => {
    e.preventDefault();
    const newBox = { color };
    setBoxes([...boxes, newBox]);
    setColor("");
  };

  return (
    <div className="container mt-5">
      <form onSubmit={addBox}>
        <div className="mb-3">
          <label htmlFor="colorInput" className="form-label">Color:</label>
          <input
            type="text"
            id="colorInput"
            className="form-control"
            value={color}
            onChange={handleColorChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Box</button>
      </form>
      <div className="mt-3">
        {boxes.map((box, index) => (
          <div
            key={index}
            style={{
              backgroundColor: box.color,
              width: '100px',
              height: '100px',
              display: 'inline-block',
              margin: '5px',
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BoxGenerator;

