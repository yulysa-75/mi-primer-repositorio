import React from 'react';
import Paciente from './Paciente';

function ColaPacientes({ pacientes }) {
  return (
    <div>
      <h2>Pacientes en la Cola</h2>
      <ul>
        {pacientes.length === 0 ? (
          <li>No hay pacientes en la cola.</li>
        ) : (
          pacientes.map((paciente) => (
            <li key={paciente.id}>
              <Paciente paciente={paciente} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ColaPacientes;