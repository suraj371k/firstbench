import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AI, Dashboard, FirstGuru, MockTest, TownHall, Performance, Navbar, Header } from './Components';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/first' element={<FirstGuru />} />
      <Route path='/town' element={<TownHall />} />
      <Route path='/ai' element={<AI />} />
      <Route path='/performance' element={<Performance />} />
      <Route path='/' element={<MockTest />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
