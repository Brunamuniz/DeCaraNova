import React, { useState } from 'react';
import './firstQuestion.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Question() {

  const [opcao, setOpcao] = useState('');
  const [paletasFiltradas, setPaletasFiltradas] = useState([]);

  const handler = async (e) => {
    const selectedOption = e.target.value;
    setOpcao(selectedOption);

    try {
      const response = await axios.get('http://localhost:3012/Color/filtrarPorArea', {
        params: {
          area: selectedOption
        }
      });
      setPaletasFiltradas(response.data.paletasfiltrados);
    } catch (error) {
      console.error('Não foi possível buscar a paleta de cor correspondente à área', error);
    }
  }

  return (
    <div className="quizz">
      <h3>Vamos à pergunta?</h3>
      <div className="question1">
        <p>Qual a área do seu negócio?</p>
        <div className="option1">
          <select onChange={handler}>
            <option value="">Nenhuma</option>
            <option value="Alimentação">Alimentação</option>
            <option value="Saúde">Saúde</option>
            <option value="Consertos">Consertos</option>
            <option value="MercadoPet">Mercado Pet</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
      </div>
      <div className="butoesdoQuizz">
        <Link to="/paletaAleatoria">
          <button className="butao">Escolher Aleatório</button>
        </Link>
        <Link to='/quizz2'>
          <button className="Cores">Filtrar por Cor</button>
        </Link>
      </div>
      <div>
        <h3>Paletas Filtradas:</h3>
        <div className='Resultado'>
          <p>Você selecionou: {opcao}</p>
          <ul>
            {paletasFiltradas.map((paleta, index) => (
              <li key={index}>
                <p>Área: {paleta.area}</p>
                <p>Cores: {paleta.cores}</p>
                <p>Códigos: {paleta.codigos}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Question;
