import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Skills from './components/Skills';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About /> 
        <Skills /> 
      </main>
    </div>
  );
}

export default App;