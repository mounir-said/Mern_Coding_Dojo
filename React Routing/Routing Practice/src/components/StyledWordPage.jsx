import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWordPage = () => {
  const { word, color, backgroundColor } = useParams();
  const style = {
    color,
    backgroundColor,
    padding: '10px',
    borderRadius: '5px'
  };

  return (
    <div style={style}>
      <h1>{word}</h1>
    </div>
  );
}

export default StyledWordPage;
