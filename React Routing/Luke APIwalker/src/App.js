import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Add this line to include Bootstrap CSS
import Form from './components/Form';
import Data from './views/Data';

function App() {
  const [data, setData] = useState({});
  const [inputs, setInputs] = useState({
    resource: "people",
    id: false
  });

  return (
    <Router>
      <header className="bg-primary p-3 mb-3">
        <nav className="container">
          <Link to="/" className="text-white">Home</Link>
        </nav>
      </header>
      <section className="container mb-3">
        <Form inputs={inputs} setInputs={setInputs} />
      </section>
      <main className="container">
        <Routes>
          <Route path="/:resource/:id" element={<Data data={data} setData={setData} inputs={inputs} setInputs={setInputs} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
