import React, {useState} from 'react'
import Card from '../layout/Card.jsx';
import { Button } from 'react-bootstrap';

export default function Rectangle () {
    const [baseRectangle, setBaseRectangle] = useState('');
    const [heightRectangle, setHeightRectangle] = useState('');

    const calcAreaRectangle = (e) => {
        if(heightRectangle === '' || baseRectangle === '') {
          alert("Dados inválidos. Verifique se o(s) campo(s) está(ão) preenchido(s) e tente novamente.");
        } else {
          let calcRectangle = (((parseFloat(baseRectangle)) * (parseFloat(heightRectangle))));
    
          alert(`A área do retângulo, com base ${baseRectangle} e altura ${heightRectangle} é igual a ${calcRectangle.toFixed(2).replace(",", ".")}`);

          setBaseRectangle('');
          setHeightRectangle('');
        }
    }

    return (
        <Card titulo="Retângulo" color="#62199E">
            <p>Calcule a área do Retângulo, fornecendo a base e a altura nos campos abaixo: </p><br/>
            
            <label htmlFor="baseRectangle">Base: </label>
            <input type="number" placeholder="Digite a base..."  value={baseRectangle} onChange={(e)=>setBaseRectangle(e.target.value)}></input><br/>
            
            <label htmlFor="heightRectangle">Altura: </label>
            <input type="number" placeholder="Digite a altura..." value={heightRectangle} onChange={(e)=>setHeightRectangle(e.target.value)}></input><br/>
            
            <Button variant="primary" onClick={calcAreaRectangle}>Calcular</Button>
      </Card>
    )
}