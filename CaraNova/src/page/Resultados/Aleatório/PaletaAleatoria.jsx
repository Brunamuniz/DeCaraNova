import { useState } from 'react'
import './PaletaAleatoria.css'

function PaletaAleatoria() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <div class="Resultados">
        <h3>Resultados</h3>
        <div class="Bloco">
          <p>Códigos das Cores:</p>
        </div>
      </div>
    </div>
  )
}

export default PaletaAleatoria;