import React from 'react';
import './App.css';
import Losangle from './components/losangle';
import Rectangle from './components/rectangle';
import Circle from './components/circle';
import Square from './components/square';
import Triangle from './components/triangle';
import Trapeze from './components/trapeze';

function App() {
  return (

    <div className="App">
        <h1>Calculadora - Figuras geométricas (Geometria Plana)</h1>
        <div className="Cards">
          <Circle />

          <Losangle />

          <Square />

          <Rectangle />

          <Trapeze />

          <Triangle />
      </div>
    </div>
  );
}

export default App;
