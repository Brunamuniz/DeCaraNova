import './App.css';
import { Link } from 'react-router-dom';
import video from '../../components/DeCaraNova.png'


function App() {

  return (
    <div>
      <div class="home">
        <div class="conteudo">
          <div class="textHome">
            <h1 class="titulo">De Cara <span>Nova</span></h1>
            <p>Escolha o nome e as cores da identidade visual da sua empresa com apenas 2 perguntas.</p>
            <div class="Butoes">
              <Link to='/quizz'>
                <button>Filtrar por Área</button>
              </Link>
              <Link to='/quizz2'>
                <button>Filtrar por Cor</button>
              </Link>
            </div>
          </div>
          <img src={video} controls/>
        </div>
      </div>
    </div>
  )
}

export default App;



