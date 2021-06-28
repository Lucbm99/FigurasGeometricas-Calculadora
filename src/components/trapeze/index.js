import React, {useState} from 'react'
import Card from '../layout/Card.jsx';
import { Button } from 'react-bootstrap';

export default function Trapeze () {
    const [baseMoreTrapezio, setBaseMoreTrapezio] = useState('');
    const [baseLessTrapezio, setBaseLessTrapezio] = useState('');
    const [heightTrapezio, setHeightTrapezio] = useState('');
  
    const calcAreaTrapezio = (e) => {
      if(baseMoreTrapezio === '' || baseLessTrapezio === '' || heightTrapezio === '') {
          alert("Dados inválidos. Verifique se o(s) campo(s) está(ão) preenchido(s) e tente novamente.")
      } else {
          let calcTrapezio = ((parseFloat(baseMoreTrapezio) + parseFloat(baseLessTrapezio)) * parseFloat(heightTrapezio)) / 2;

          alert(`A área do trapézio, com base maior ${baseMoreTrapezio} e base menor ${baseLessTrapezio} e altura ${heightTrapezio} é igual a ${calcTrapezio.toFixed(2)}`);

          setBaseMoreTrapezio('');
          setBaseLessTrapezio('');
          setHeightTrapezio('');
      }
    }
    return (
        <Card titulo="Trapézio" color="#AC1CA7">
        <p>Calcule a área do Trapézio, fornecendo as respectivas bases e a altura nos campos abaixo: </p><br/>

        <label htmlFor="baseMoreTrapezio">Base maior: </label>
        <input type="number" placeholder="Digite a base..."  value={baseMoreTrapezio} onChange={(e)=>setBaseMoreTrapezio(e.target.value)}></input><br/>

        <label htmlFor="baseLessTrapezio">Base menor: </label>
        <input type="number" placeholder="Digite a base..."  value={baseLessTrapezio} onChange={(e)=>setBaseLessTrapezio(e.target.value)}></input><br/>

        <label htmlFor="heightTrapezio">Altura: </label>
        <input type="number" placeholder="Digite a altura..." value={heightTrapezio} onChange={(e)=>setHeightTrapezio(e.target.value)}></input><br/>

        <Button variant="primary" onClick={calcAreaTrapezio}>Calcular</Button>
      </Card>
    )
}