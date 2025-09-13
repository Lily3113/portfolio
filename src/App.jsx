import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; 
import Skills from './components/Skills';
import Experience from './components/Experience';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <About /> 
        <Skills />
         <Experience /> 
      </main>
    </div>
  );
}

export default App;