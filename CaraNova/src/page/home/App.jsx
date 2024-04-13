import './App.css'
import { Link } from 'react-router-dom';


function App() {

  return (
    <div>
      <div class="home">
        <div class="textHome">
          <h1 class="titulo">De Cara <span>Nova</span></h1>
          <p>Escolha o nome e as cores da identidade visual da sua empresa com apenas 2 perguntas.</p>
          <Link to='/quizz'>
            <button>Comece Já</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default App;



