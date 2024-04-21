import './secondQuestion.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';


function Question2() {

  const [Second, setSecond] = useState('');
  const [coresFiltradas, setcoresFiltradas] = useState([]);
  
  const handler = async (e) => {
    const selectedCor = e.target.value;
    setSecond(selectedCor);

      try {
        const response = await axios.get('http://localhost:3012/Color/filtrarPorCor', {
        params: {
        cores: selectedCor
        }
      });
      setcoresFiltradas(response.data.corFilltrada);
    } catch (error) {
      console.error('Não foi possível buscar a paleta de cor correspondente à área', error);
    }
  }
  
  return (
    <div className="sencondQuizz">
      <h3>Vamos à pergunta?</h3>
      <div className="question2">
        <p>Você possui uma cor de preferência?</p>
        <div className="option2">
          <select onChange={handler}>
          <option value="">Nenhuma</option>
            <option value="Laranja">Laranja</option>
            <option value="Vermelho">Vermelho</option>
            <option value="Amarelo">Amarelo</option>
            <option value="Verde">Verde</option>
            <option value="Azul Claro">Azul Claro</option>
            <option value="Azul Escuro">Azul Escuro</option>
            <option value="Índigo">Índigo</option>
            <option value="Violeta">Violeta</option>
            <option value="Marrom">Marrom</option>
            <option value="Cinza Claro">Cinza Claro</option>
            <option value="Cinza Escuro">Cinza Escuro</option>
            <option value="Rosa Claro">Rosa Claro</option>
            <option value="Rosa Escuro">Rosa Escuro</option>
            <option value="Turquesa">Turquesa</option>
            <option value="Ouro">Ouro</option>
            <option value="Prata">Prata</option>
            <option value="Bronze">Bronze</option>
            <option value="Púrpura">Púrpura</option>
            <option value="Esmeralda">Esmeralda</option>
            <option value="Aqua">Aqua</option>
            <option value="Tangerina">Tangerina</option>
            <option value="Lavanda">Lavanda</option>
            <option value="Orquídea">Orquídea</option>
            <option value="Cereja">Cereja</option>
            <option value="Limão">Limão</option>
            <option value="Salmão">Salmão</option>
            <option value="Azeitona">Azeitona</option>
            <option value="Âmbar">Âmbar</option>
            <option value="Jade">Jade</option>
            <option value="Bordô">Bordô</option>
          </select>
        </div>
      </div>
      <div class="butoesQuizz">
        <Link to="/paletaAleatoria">
          <button class="butaoAleatorio">Escolher Aleatório</button>
        </Link>
        <Link to='/quizz'>
          <button class="Area">Filtrar por Área</button>
        </Link>
      </div>
      <div>
        <h3>Cor Filtrada:</h3>
        <div className='resultados'>
          <p>Você selecionou: {Second}</p>
          <ul>
            {coresFiltradas.map((paleta, index) => (
              <li key={index}>
                <p>Cores: {paleta.cores}</p>
                <p>Códigos: {paleta.codigos}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Question2;