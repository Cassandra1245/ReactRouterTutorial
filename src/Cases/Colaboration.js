import React from 'react';

const Collaboration = () => {
  const collaborations = [
    { company: "TechCorp", role: "Desarrollador Full Stack", description: "Trabajé en el desarrollo y mantenimiento de la plataforma de gestión interna." },
    { company: "Innovatech", role: "Líder de equipo de front-end", description: "Lideré el equipo encargado de crear interfaces de usuario dinámicas y responsivas." },
    { company: "WebSolutions", role: "Ingeniero de software", description: "Me encargué de la optimización y refactorización de código en proyectos existentes." },
    { company: "CreativeDev", role: "Consultor de tecnología", description: "Ofrecí asesoramiento sobre buenas prácticas de desarrollo y optimización de rendimiento." },
  ];

  return (
    <div>
      <h2>Colaboraciones</h2>
      <ul>
        {collaborations.map((collaboration, index) => (
          <li key={index}>
            <strong>{collaboration.company}:</strong> {collaboration.role} - {collaboration.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Collaboration;