import React, {useState} from 'react'
import Card from '../layout/Card.jsx';
import { Button } from 'react-bootstrap';

export default function Square () {
  const [baseSquare, setBaseSquare] = useState('');

    const calcAreaSquare = (e) => {
        if(baseSquare === '') {
          alert("Dados inválidos. Verifique se o(s) campo(s) está(ão) preenchido(s) e tente novamente.");
        } else {
          let calcSquare = ((parseFloat(baseSquare)) * (parseFloat(baseSquare)));
    
          alert(`A área do quadrado, com lado ${baseSquare} é igual a ${calcSquare.toFixed(2)}`);
          setBaseSquare('');
        }
      }

    return (
        <Card titulo="Quadrado" color="#59C7BE">
            <p>Calcule a área do Quadrado, fornecendo a medida do lado abaixo: </p><br/>

            <label htmlFor="baseSquare">Lado: </label>
            <input type="number" placeholder="Lado..."  value={baseSquare} onChange={(e)=>setBaseSquare(e.target.value)} required></input><br/>
            
            <Button variant="primary" onClick={calcAreaSquare}>Calcular</Button>
        </Card>
    )
}