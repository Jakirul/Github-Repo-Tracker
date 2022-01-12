import React from 'react'
import { Routes, Route } from 'react-router-dom';
import RepoMain from './RepoMain';
import RepoData from './RepoData';
import './App.css'


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<RepoMain />} />
      <Route path="/:username/:id" exact element={<RepoData />}/>
    </Routes>
  );
}

export default App;
