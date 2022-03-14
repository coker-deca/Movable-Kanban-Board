/* eslint-disable react/no-array-index-key */
import './App.css';

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BoardItem from './pages/BoardItem';
import BoardPage from './pages/BoardPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BoardPage />} />
        <Route path="/boards" element={<BoardPage />} />
        <Route path="/boards/:id" element={<BoardItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
