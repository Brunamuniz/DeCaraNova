import { useState } from 'react'
import './firstQuestion.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Question() {

  const [opcao, setOpcao] = useState('');

  const handler = (e) => {
    setOpcao(e.target.value)
        
    console.log(e.target.value)

    requestOption(e.target.value)
  }

  const requestOption =  async (area) =>{
     
     try {
      const response = await axios.get('/Color/filtrarPorArea', {area} );
      console.log(response.data)
     } catch (error) {
       console.error('Não foi possivel buscar a paleta de cor correspondente a area',error)
     }
  }

  return (
    <div className="quizz">
      <h3>Vamos à pergunta?</h3>
      <div className="question1">
        <p>Qual a área do seu negócio?</p>
        <div className="option1">
          <select onChange={handler}>
            <option value=""></option>
            <option value="Alimentação">Alimentação</option>
            <option value="Beleza, saúde e estética">Beleza, saúde e estética</option>
            <option value="Consertos">Consertos</option>
            <option value="Mercado Pet">Mercado Pet</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>
        <button class="Enviar">Enviar</button>
      </div>
      <div class="butoesdoQuizz">
        <Link to="/paletaAleatoria">
          <button class="butao">Escolher Aleatório</button>
        </Link>
        <Link to='/quizz2'>
          <button class="Cores">Filtrar por Cor</button>
        </Link>
      </div>
    </div>
  )
}

export default Question;