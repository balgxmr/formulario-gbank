import { useState } from "react";

export default function Formulario({ onAgregarTarjeta }) {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [error, setError] = useState("");

  // Límites de fecha
  const fechaMin = "1900-01-01";
  const fechaMax = new Date().toISOString().split("T")[0]; // hoy

  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones con REGEX
    const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // letras, espacios y tildes
    const comentariosRegex = /^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñ\s.,'"&@$*()-;?¿]+$/; // letras, números y algunos caracteres

    if (!nombre || !fecha || !comentarios) {
      setError("Por favor completa todos los campos.");
      return;
    }

    if (!nombreRegex.test(nombre)) {
      setError("El nombre solo puede contener letras, espacios y tildes.");
      return;
    }

    if (new Date(fecha) < new Date(fechaMin) || new Date(fecha) > new Date(fechaMax)) {
      setError(`La fecha debe estar entre ${fechaMin} y ${fechaMax}.`);
      return;
    }

    if (!comentariosRegex.test(comentarios)) {
      setError("Los comentarios solo pueden contener letras, números y los caracteres . , ' \" & @ $ * ( ) - ; ? ¿");
      return;
    }

    // Si pasa todas las validaciones
    const nuevaTarjeta = {
      id: Date.now(),
      nombre,
      fecha,
      comentarios,
      edad: calcularEdad(fecha),
    };

    onAgregarTarjeta(nuevaTarjeta);

    // limpiar campos y error
    setNombre("");
    setFecha("");
    setComentarios("");
    setError("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-6 mb-6 max-w-2xl mx-auto">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Información básica</h2>

      <div className="space-y-6">
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Nombre</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              if (error) setError(""); // limpia error al escribir
            }}
            placeholder="Tu nombre completo"
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Fecha */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Fecha de nacimiento</label>
          <input
            type="date"
            value={fecha}
            min={fechaMin}
            max={fechaMax}
            onChange={(e) => {
              setFecha(e.target.value);
              if (error) setError("");
            }}
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>

        {/* Comentarios */}
        <div>
          <label className="block text-sm font-medium text-gray-900">Comentarios</label>
          <textarea
            rows="3"
            value={comentarios}
            onChange={(e) => {
              setComentarios(e.target.value);
              if (error) setError("");
            }}
            placeholder="Escribe tus comentarios aquí..."
            className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      {/* Mensaje de error */}
      {error && <div className="mt-5 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3">{error}</div>}

      <div className="mt-5 flex justify-end">
        <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Guardar
        </button>
      </div>
    </form>
  );
}
