import { useState } from 'react';
import axios from 'axios';
import './PaletaAleatoria.css';
import { Link } from 'react-router-dom';

function PaletaAleatoria() {
  const [coresAleatorias, setCoresAleatorias] = useState([]);

  const handler = async () => {
    try {

      const response = await axios.get('http://localhost:3012/Color/paletaAleatoria');
      setCoresAleatorias(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Não foi possível buscar a paleta', error);
    }
  };

  return (
    <div className="body">
      <div className="Resultados">
        <h3>Resultados</h3>
        <div className="Bloco">
          <p>Códigos das Cores:</p>
          <div>
            {/* Exibir as cores aleatórias */}
            {coresAleatorias.map((cor, index) => (
            <div key={index}>{cor}</div>
            ))}
          </div>
          <button onClick={handler} className='Buscar'>Buscar Paleta</button>
        </div>
        <div className='Voltar'>
          <Link to="/quizz">
            <button className='voltarArea'>Filtrar por Área</button>
          </Link>
          <Link to="/quizz2">
            <button className='voltarCor'>Filtrar por Cor</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PaletaAleatoria;