import React, { useState } from 'react';
import PersonCard from './PersonCard';

function PersonCardWithBirthdayButton({ lastName, firstName, age, hairColor }) {
  const [currentAge, setCurrentAge] = useState(age);

  const handleBirthdayClick = () => {
    setCurrentAge(currentAge + 1);
  };

  return (
    <div>
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


export default PersonCardWithBirthdayButton;
