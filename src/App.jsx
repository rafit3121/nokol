import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NokolArea from './pages/NokolArea';
import ComputerThird from './pages/ComputerThird';
import ComputerForth from './pages/ComputerForth';
import ComputerFifth from './pages/ComputerFifth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nokol-area" element={<NokolArea />} />
      <Route path="/computer-third" element={<ComputerThird />} />
      <Route path="/computer-forth" element={<ComputerForth />} />
      <Route path="/computer-fifth" element={<ComputerFifth/>} />
    </Routes>
  );
}

export default App;
