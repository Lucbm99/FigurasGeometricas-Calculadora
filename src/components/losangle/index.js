import React, {useState} from 'react'
import Card from '../layout/Card.jsx';
import { Button } from 'react-bootstrap';

export default function Losangle () {
    const [diagonalMoreLosangle, setDiagonalMoreLosangle] = useState('');
    const [diagonalLessLosangle, setDiagonalLessLosangle] = useState('');

    const calcAreaLosangle = () => {
        if(diagonalMoreLosangle === '' || diagonalLessLosangle === '') {
            alert("Dados inválidos. Verifique se o(s) campo(s) está(ão) preenchido(s) e tente novamente.");
        } else {
            let calcLosangle = ((parseFloat(diagonalMoreLosangle)) * (parseFloat(diagonalLessLosangle))) / 2;

            alert(`A área do Losango, com diagonal maior ${diagonalMoreLosangle} e diagonal menor de ${diagonalLessLosangle} é igual a ${calcLosangle.toFixed(2)}`);

            setDiagonalMoreLosangle('');
            setDiagonalLessLosangle('');
        }
    }

    return (
        <Card titulo="Losango" color="#3DAC40">
            <p>Calcule a área do Losango, fornecendo a medida das diagonais abaixo: </p><br/>

            <label htmlFor="diagonalMoreLosangle">Diagonal maior: </label>
            <input type="number" placeholder="Digite a diagonal maior..."  value={diagonalMoreLosangle} onChange={(e)=>setDiagonalMoreLosangle(e.target.value)} required></input><br/>

            <label htmlFor="diagonalLessLosangle">Diagonal menor: </label>
            <input type="number" placeholder="Digite a diagonal menor..."  value={diagonalLessLosangle}  onChange={(e)=>setDiagonalLessLosangle(e.target.value)} required></input><br/>
            
            <Button variant="primary" onClick={calcAreaLosangle}>Calcular</Button>
        </Card>
    )
}

