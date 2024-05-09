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

function App() {
  return (
    <div className="App">
      <PersonCard
        lastName="Doe"
        firstName="John"
        age={45}
        hairColor="Black"
      />
      <PersonCard
        lastName="Smith"
        firstName="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCard
        lastName="Fillmore"
        firstName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCard
        lastName="Smith"
        firstName="Maria"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

export default PersonCard;
