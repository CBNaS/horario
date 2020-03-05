import React from 'react';
import './App.css';
import './css/style.css';

const fecha  = new Date();

function App() {
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
            31°
          </span>
          <span class = "txtSecundario" id = "estado">
            Pachuca
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
