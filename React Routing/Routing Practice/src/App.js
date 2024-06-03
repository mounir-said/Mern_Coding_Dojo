import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NumberPage from './components/NumberPage';
import WordPage from './components/WordPage';
import StyledWordPage from './components/StyledWordPage';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:number" element={<NumberPage />} />
        <Route path="/hello" element={<WordPage />} />
        <Route path="/hello/:color/:backgroundColor" element={<StyledWordPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
