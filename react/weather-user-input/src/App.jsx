import React, { useState } from 'react';
import './App.css'
// import { Button, Card } from 'react-bootstrap';

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
        <div>
            <h1>Consulta el tiempo</h1>
            <input
                type="text"
                placeholder="Introduzca una ciudad"
                value={ciudad}
                onChange={(e) => especificaCiudad(e.target.value)}
            />
            {/* botón con tag de html puro */}
            <button onClick={fetchWeather}>Consultar</button>

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

