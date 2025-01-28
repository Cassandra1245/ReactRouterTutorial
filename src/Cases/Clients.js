import React from 'react';

const Clients = () => {
  const clientList = [
    { name: "Empresa A", description: "Desarrollo de una plataforma de comercio electrónico." },
    { name: "Empresa B", description: "Creación de un sistema de gestión de inventarios." },
    { name: "Empresa C", description: "Desarrollo de una app móvil para la gestión de tareas." },
    { name: "Empresa D", description: "Optimización de una plataforma web para mejorar el rendimiento." },
    { name: "Empresa E", description: "Desarrollo de un sistema de análisis de datos en tiempo real." },
  ];

  return (
    <div>
      <h2>Clientes</h2>
      <ul>
        {clientList.map((client, index) => (
          <li key={index}>
            <strong>{client.name}:</strong> {client.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Clients;