import React from 'react';

function GestorCola({ cola, atenderPaciente }) {
 
  function obtenerPacienteActual() {
    if (cola.length === 0) {
      return "No hay pacientes en la cola.";
    }
    const pacienteActual = cola[0];
    return ` ${pacienteActual.nombre} (Edad: ${pacienteActual.edad}, Síntoma: ${pacienteActual.sintoma})`;
  }

  function obtenerSiguientePaciente() {
    if (cola.length <= 1) {
      return "No hay más pacientes.";
    }
    const siguientePaciente = cola[1];
    return ` ${siguientePaciente.nombre} (Edad: ${siguientePaciente.edad}, Síntoma: ${siguientePaciente.sintoma})`;
  }

  function obtenerPacientesRestantes() {
    return cola.length;
  }

  return (
    <div className="container mt-4 p-4 border rounded bg-light shadow-sm">
      <h1 className="text-center mb-4">Gestión de Cola de Pacientes</h1>
      
      <div className="mb-3">
        <h5>Paciente actual:</h5>
        <p className="border p-3 rounded bg-white text-dark">
          {obtenerPacienteActual()}
        </p>
      </div>

      <div className="mb-3">
        <h5>Próximo paciente:</h5>
        <p className="border p-3 rounded bg-white text-dark">
          {obtenerSiguientePaciente()}
        </p>
      </div>

      <div className="mb-3">
        <h5>Pacientes restantes:</h5>
        <p className="border p-3 rounded bg-white text-dark">
          {obtenerPacientesRestantes()}
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-outline-danger" onClick={atenderPaciente}>
          Atender Paciente
        </button>
      </div>
    </div>
  );
}

export default GestorCola;