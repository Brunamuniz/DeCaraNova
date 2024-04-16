import './secondQuestion.css'
import { Link } from 'react-router-dom';

function Question2() {

  return (
    <div className="sencondQuizz">
      <h3>Vamos à pergunta?</h3>
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
        <button class="Enviar2">Enviar</button>
      </div>
      <div class="butoesQuizz">
        <Link to="/paletaAleatoria">
          <button class="butaoAleatorio">Escolher Aleatório</button>
        </Link>
        <Link to='/quizz'>
          <button class="Area">Filtrar por Área</button>
        </Link>
      </div>
    </div>
  )
}

export default Question2;