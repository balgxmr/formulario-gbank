import { useState } from "react";

export default function FormularioBasico() {
  // Declarar estados
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [comentarios, setComentarios] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, fecha, comentarios });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-5">
      <div className="border-b border-gray-900/10 pb-6">
        <h2 className="text-lg font-semibold text-gray-900">Información básica</h2>
        <p className="mt-1 text-sm text-gray-600">Completa los siguientes campos.</p>

        <div className="mt-6 space-y-6">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium text-gray-900">
              Nombre
            </label>
            <input id="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Tu nombre completo" className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>

          {/* Fecha */}
          <div>
            <label htmlFor="fecha" className="block text-sm font-medium text-gray-900">
              Fecha
            </label>
            <input id="fecha" type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
          </div>

          {/* Comentarios */}
          <div>
            <label htmlFor="comentarios" className="block text-sm font-medium text-gray-900">
              Comentarios
            </label>
            <textarea id="comentarios" rows="3" value={comentarios} onChange={(e) => setComentarios(e.target.value)} placeholder="Escribe tus comentarios aquí..." className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="submit" className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Guardar
        </button>
      </div>
    </form>
  );
}
