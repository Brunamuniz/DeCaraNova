import { createBrowserRouter } from "react-router-dom";
import Question from "../page/Questions/firstQuestion";
import App from "../page/home/App";
import PaletaAleatoria from "../page/Resultados/Aleatório/PaletaAleatoria";
import Question2 from "../page/Questions/secondQuestion";


export const router = createBrowserRouter([
    {path:'/quizz', 
    element: <Question/>
    },

    {path:'/quizz2', 
    element: <Question2/>
    },

    {path:'/',
    element: <App/>
    },

    {path: '/paletaAleatoria',
    element: <PaletaAleatoria/>
    }
])

