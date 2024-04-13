import { createBrowserRouter } from "react-router-dom";
import Question from "../page/Questions";
import App from "../page/home/App";
import PaletaAleatoria from "../page/Resultados/Aleatório/PaletaAleatoria";


export const router = createBrowserRouter([
    {path:'/quizz', 
    element: <Question/>
    },

    {path:'/',
    element: <App/>
    },

    {path: '/paletaAleatoria',
    element: <PaletaAleatoria/>
    }
])

