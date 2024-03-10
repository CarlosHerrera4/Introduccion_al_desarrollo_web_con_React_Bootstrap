import { useState, useEffect } from 'react'

function App() {
  // Siempre tiene la misma sintaxis y el mismo esquema
  /* useState es un Hook por defecto de React para cambiar el estado de un componente*/
  const [tiempo, especificaTiempo] = useState(null)

  /* useEffect es otro Hook que se asegura que no renderice el componente hasta que ejecute el código JS */
  useEffect(() => {
    fetch('https://wttr.in/Madrid?format=j1')
      .then(response => 
        response.json()
      )
      .then(data => 
        /* Renderiza de nuevo el componente */
        especificaTiempo(data)
      )
      .catch(error => {
        alert("Ha habido un error")
      })
  }, [])


  return (
    <>
      <div>
        <h1>Tiempo en Madrid</h1>
        <div>Temperatura: {tiempo?.current_condition[0]?.temp_C}º</div>
        <div>Descripción: {tiempo?.current_condition[0]?.lang_es[0]?.value}</div>
      </div>
    </>
  )
}

export default App
