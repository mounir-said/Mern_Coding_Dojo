import React from 'react';
import PersonCard from './PersonCard';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <PersonCardWithBirthdayButton
        lastName="Doe"
        firstName="John"
        age={45}
        hairColor="Black"
      />
      <PersonCardWithBirthdayButton
        lastName="Smith"
        firstName="John"
        age={88}
        hairColor="Brown"
      />
      <PersonCardWithBirthdayButton
        lastName="Fillmore"
        firstName="Millard"
        age={50}
        hairColor="Brown"
      />
      <PersonCardWithBirthdayButton
        lastName="Smith"
        firstName="Maria"
        age={62}
        hairColor="Brown"
      />
    </div>
  );
}

function PersonCardWithBirthdayButton({ lastName, firstName, age, hairColor }) {
  const [currentAge, setCurrentAge] = useState(age);

  const handleBirthdayClick = () => {
    setCurrentAge(currentAge + 1);
  };

  return (
    <div className="person-card">
      <PersonCard
        lastName={lastName}
        firstName={firstName}
        age={currentAge}
        hairColor={hairColor}
      />
      <button onClick={handleBirthdayClick}>Celebrate Birthday</button>
    </div>
  );
}

export default App;
