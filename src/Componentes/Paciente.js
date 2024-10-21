import React from 'react';

function Paciente({ paciente }) {
  return (
    <div className="paciente-item">
      <p>
        Paciente: {paciente.nombre}, Edad: {paciente.edad}, Sintoma: {paciente.sintoma}
      </p>
    </div>
  );
}

export default Paciente;