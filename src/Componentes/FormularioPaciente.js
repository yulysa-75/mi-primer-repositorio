import React, { useState } from 'react';

function FormularioPaciente({ agregarPaciente }) {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [sintoma, setSintoma] = useState('');

  function manejarEnvio(e) {
    e.preventDefault();

    if (!nombre || !edad || !sintoma) return;

    agregarPaciente({ nombre: nombre, edad: edad, sintoma: sintoma });
    setNombre('');
    setEdad('');
    setSintoma('');
  }

  return (
    <form onSubmit={manejarEnvio} className="mb-4 container p-4 border rounded bg-light shadow-sm">
      <h2 className="mb-4 text-center">Agregar Paciente</h2>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre del paciente</label>
        <input
          type="text"
          id="nombre"
          className="form-control"
          placeholder="Nombre del paciente"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="edad" className="form-label">Edad del paciente</label>
        <input
          type="number"
          id="edad"
          className="form-control"
          placeholder="Edad del paciente"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="sintoma" className="form-label">Síntoma del paciente</label>
        <input
          type="text"
          id="sintoma"
          className="form-control"
          placeholder="Síntoma del paciente"
          value={sintoma}
          onChange={(e) => setSintoma(e.target.value)}
          required
        />
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" class="btn btn-outline-success">
          Agregar Paciente
        </button>
      </div>
    </form>
  );
}

export default FormularioPaciente;