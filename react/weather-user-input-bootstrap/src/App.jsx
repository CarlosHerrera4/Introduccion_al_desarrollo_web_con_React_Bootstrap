import React, { useState } from 'react';
import './App.css'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'

export default function App() {
  const [ciudad, especificaCiudad] = useState('');
  const [tiempo, especificaTiempo] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = () => {
    if (!ciudad) return; // Si no hay ciudad ingresada, no hacer nada

    setLoading(true);
    fetch(`https://wttr.in/${encodeURIComponent(ciudad)}?format=j1`)
      .then(response => response.json())
      .then(data => {
        especificaTiempo(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Ha habido un error en la consulta de datos: ", error);
        setLoading(false);
      });
  };

  return (
    <div >
      <h1>Consulta el tiempo</h1>
      {/* Entrada de texto con html puro */}
      {/* <input
                type="text"
                placeholder="Introduzca una ciudad"
                value={ciudad}
                onChange={(e) => especificaCiudad(e.target.value)}
            /> */}

      {/* Entrada de texto con los componentes Form de React-Bootstrap */}
      <Form.Label>Introduzca el nombre de una ciudad</Form.Label>
      <Form.Control
        type="text"
        id="inputCity"
        onChange={(e) => especificaCiudad(e.target.value)}
      />

      <br />

      {/* botón con tag de html puro
      {/<button onClick={fetchWeather}>Consultar</button> */}

      {/* Componente Button de React-Bootstrap */}
      <Button variant="link" onClick={fetchWeather}>Consultar</Button>

      {loading && <div>Cargando datos...</div>}

      {tiempo && !loading && (
        <div>
          <h2>Tiempo en {ciudad}</h2>
          <div>Temperatura: {tiempo.current_condition[0].temp_C}°C</div>
          <div>Descripción: {tiempo.current_condition[0].lang_es[0].value}</div>
        </div>
      )}
    </div>
  );
}

