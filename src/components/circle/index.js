import React, {useState} from 'react'
import Card from '../layout/Card.jsx';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Circle () {
    const [rayCircle, setRayCirle] = useState('');

    const pi = 3.14; 

    const calcAreaCircle = (e) => {
      if(rayCircle === '') {
        alert("Dados inválidos. Verifique se o(s) campo(s) está(ão) preenchido(s) e tente novamente.");
      } else {
        let calcCircle = pi *  ((parseFloat(rayCircle)) * (parseFloat(rayCircle)));
  
        alert(`A área do círculo, com raio ${rayCircle} é igual a ${calcCircle.toFixed(2)}`);
        setRayCirle('');
      }
    }
  

    return (
        <Card titulo="Círculo" color="#E23633">
            <h6>Nota: PI (π) = 3,14.</h6>
            <p>Calcule a área do Círculo, fornecendo a medida do raio abaixo: </p><br/>
        
            <label htmlFor="raio">Raio: </label>
            <input type="number" placeholder="Raio..."  value={rayCircle} onChange={(e)=>setRayCirle(e.target.value)} required></input><br/>
            
            <Button variant="primary" onClick={calcAreaCircle}>Calcular</Button>
      </Card>
    )
}