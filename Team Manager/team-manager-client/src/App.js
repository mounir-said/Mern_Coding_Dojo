// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlayerList from './Components/PlayerList';
import AddPlayer from './Components/AddPlayer';
import ManagePlayerStatus from './Components/ManagePlayerStatus';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/players/list" element={<PlayerList />} />
        <Route path="/players/add" element={<AddPlayer />} />
        <Route path="/status/game/:gameId" element={<ManagePlayerStatus />} />
        <Route path="/" exact element={<PlayerList />} />
      </Routes>
    </Router>
  );
}

export default App;
