import React, { useState } from 'react';

function Productos() {

  return (
    <div>

      <form action="/submit" method="POST">
        <div>
          <label for="nombre">Nombre:</label>
        </div>

        <div>
          <label for="email">Correo Electrónico:</label>
        </div>

        <div>
          <label for="mensaje">Mensaje:</label>
        </div>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
    )
}

export default Productos;
