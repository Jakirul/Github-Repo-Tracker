import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { RepoMain, RepoData } from './components';
import './styling/App.css'


function App() {
  return (
    <Routes>
      <Route path="/" exact element={<RepoMain />} />
      <Route path="/:username/:id" exact element={<RepoData />}/>
    </Routes>
  );
}

export default App;
