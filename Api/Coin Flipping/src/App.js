import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function tossCoin() {
  return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
  return new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;

    while (headsCount < 5 && attempts < 100) {
      attempts++;
      let result = tossCoin();
      console.log(`${result} was flipped`);
      if (result === "heads") {
        headsCount++;
      } else {
        headsCount = 0;
      }
    }

    if (headsCount === 5) {
      resolve(`It took ${attempts} tries to flip five "heads"`);
    } else {
      reject('Coin was flipped more than 100 times without flipping five "heads" in a row');
    }
  });
}

const App = () => {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fiveHeads()
      .then(res => setResult(res))
      .catch(err => setError(err));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Coin Flipping</h1>
      {result && <div className="alert alert-success">{result}</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <p>When does this run now?</p>
    </div>
  );
};

export default App;
