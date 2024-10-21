import React, { useState } from 'react';
import FormularioPaciente from './Componentes/FormularioPaciente';
import ColaPacientes from './Componentes/ColaPacientes';
import GestorCola from './Componentes/GestorCola';

function App() {
  const [pacientes, setPacientes] = useState([]);
  function agregarPaciente(paciente) {
    setPacientes(pacientes.concat(paciente)); 
  }
  function atenderPaciente() {
    if (pacientes.length > 0) { 
      setPacientes(pacientes.slice(1)); 
    }
  }

  return (
    <div className="container">
      <h1>Gestor de Cola de Pacientes</h1>
      <FormularioPaciente agregarPaciente={agregarPaciente} />
      <GestorCola cola={pacientes} atenderPaciente={atenderPaciente} />
      <ColaPacientes pacientes={pacientes} />
    </div>
  );
}

export default App;
