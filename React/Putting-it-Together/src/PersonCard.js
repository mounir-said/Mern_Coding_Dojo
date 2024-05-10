import React from 'react';

function PersonCard(props) {
  return (
    <div className="person-card">
      <h2>{props.lastName} {props.firstName}</h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
    </div>
  );
}


export default PersonCard;
