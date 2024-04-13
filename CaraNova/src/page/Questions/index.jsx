import { useState } from 'react'
import './question.css'
import { Link } from 'react-router-dom';

function Question() {
  const [count, setCount] = useState(0)

  return (
    <div className="quizz">
      <h3>Vamos às perguntas?</h3>
      <div className="question1">
        <p>Qual a área do seu negócio?</p>
        <div className="option1">
        <select>
          <option value="Alimentação">Alimentação</option>
          <option value="Beleza, saúde e estética">Beleza, saúde e estética</option>
          <option value="Consertos">Consertos</option>
          <option value="Mercado Pet">Mercado Pet</option>
          <option value="Tecnologia">Tecnologia</option>
          <option value="Marketing">Marketing</option>
        </select>
        </div>
      </div>
      <div className="question2">
        <p>Você possui uma cor de preferência?</p>
        <div className="option2">
        <select>
          <option value=""></option>
          <option value="Laranja">Laranja</option>
          <option value="Marrom">Marrom</option>
          <option value="Vermelho">Vermelho</option>
          <option value="Verde">Verde</option>
          <option value="Azul">Azul</option>
          <option value="Roxo">Roxo</option>
          <option value="Preto">Preto</option>
          <option value="Branco">Branco</option>
          <option value="Cinza">Cinza</option>
          <option value="Amarelo">Amarelo</option>
          <option value="Ciano">Ciano</option>
          <option value="Rosa">Rosa</option>
          <option value="Prata">Prata</option>
          <option value="Lavanda">Lavanda</option>
        </select>
        </div>
      </div>
      <div class="butoesQuizz">
        <button>Enviar</button>
        <Link to="/paletaAleatoria">
          <button class="butaoAleatorio">Escolher Aleatório</button>
        </Link>
      </div>
    </div>
  )
}

export default Question;