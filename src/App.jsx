import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NokolArea from './pages/NokolArea';
import ComputerSecond from './pages/ComputerSecond';
import ComputerThird from './pages/ComputerThird';
import ComputerForth from './pages/ComputerForth';
import ComputerFifth from './pages/ComputerFifth';
import ComputerFirst from './pages/ComputerFirst';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/nokol-area" element={<NokolArea />} />
      <Route path="/computer-first" element={<ComputerFirst />} />
      <Route path="/computer-second" element={<ComputerSecond />} />
      <Route path="/computer-third" element={<ComputerThird />} />
      <Route path="/computer-forth" element={<ComputerForth />} />
      <Route path="/computer-fifth" element={<ComputerFifth/>} />
    </Routes>
  );
}

export default App;
