import React, {useState} from 'react'
import Card from '../layout/Card.jsx';
import { Button } from 'react-bootstrap';

export default function Triangle () {
    const [baseTriangle, setBaseTriangle] = useState('');
    const [heightTriangle, setHeightTriangle] = useState('');
  
    const calcAreaTriangle = (e) => {
        if(heightTriangle === '' || baseTriangle === '') {
            alert("Dados inválidos. Verifique se o(s) campo(s) está(ão) preenchido(s) e tente novamente.")
        } else {
            let calcTriangle = ((parseFloat(baseTriangle)) * (parseFloat(heightTriangle))) / 2;
            
            alert(`A área do triângulo, com base ${baseTriangle} e altura ${heightTriangle} é igual a ${calcTriangle.toFixed(2)}`);

            setBaseTriangle('');
            setHeightTriangle('');
        }
    }

    return (
        <Card titulo="Triângulo" color="#2064EA">       
              <p>Calcule a área do Triângulo, fornecendo a base e a altura nos campos abaixo:</p> <br/>

              <label htmlFor="baseTriangle">Base: </label>
              <input type="number" placeholder="Digite a base..."  value={baseTriangle} onChange={(e)=>setBaseTriangle(e.target.value)}></input>
              
              <label htmlFor="heightTriangle">Altura: </label>
              <input type="number" placeholder="Digite a altura..." value={heightTriangle} onChange={(e)=>setHeightTriangle(e.target.value)}></input><br/>

            <Button variant="primary" onClick={calcAreaTriangle}>Calcular</Button>
        </Card>
    )
}
