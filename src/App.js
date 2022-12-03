import React from 'react';
import './App.css';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Premium from './components/Premium';
function App() {
  return (
    <div className="App">
      <Header />
      <MainSection/>
      <Premium />
    </div>
  );
};

export default App;