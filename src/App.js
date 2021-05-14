import React from 'react';
import './App.css';
import Losangle from './components/losangle';
import Rectangle from './components/rectangle';
import Circle from './components/circle';
import Square from './components/square';
import Triangle from './components/triangle';
import Trapezio from './components/trapezio';

function App() {
  return (

    <div className="App">
        <h1>Calculadora - Figuras geométricas (Geometria Plana)</h1>
        <div className="Cards">
          <Circle />

          <Losangle />

          <Square />

          <Rectangle />

          <Trapezio />

          <Triangle />
      </div>
    </div>
  );
}

export default App;
