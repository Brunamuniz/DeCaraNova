import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './page/home/App.jsx'
import './index.css'
import Question from './page/Questions/firstQuestion.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
