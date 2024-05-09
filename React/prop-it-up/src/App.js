import React from 'react';
import PersonCard from './PersonCard';


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
