import React, { useEffect, useState } from "react";
import "./css/style.css";

export default function App() {
  const fecha  = new Date();
  let [datosClima, obtenerClima] = useState([]);
  let llave = "7b8f358532534d9b8e6940eeed5cc69a";

  let consultarAPI = async () => {
    let url = `https://api.weatherbit.io/v2.0/current?city=Mexico&key=${llave}`;
    let respuesta = await fetch(url);
    let clima = await respuesta.json();
    obtenerClima(clima.data);
  };
  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <div className="App">
      <div className = "container">
        <div>
          <span class = "txtPrincipal">
            {fecha.getHours()+ " : "+fecha.getMinutes()}
          </span>
          <br/>
          <span class = "txtSecundario">
            {fecha.getDate()+ " de "+fecha.getMonth()+" de "+fecha.getFullYear()}
          </span>
        </div>
        <div>
          <span class = "txtPrincipal" id = "temperatura">
            {datosClima.map((dato, key) => (
            <span key={key}>
              {dato.temp +" °C"}
            </span>
            ))}
          </span>
          <span class = "txtSecundario" id = "estado">
            Pachuca
          </span>
        </div>
      </div>
    </div>
  );
}
