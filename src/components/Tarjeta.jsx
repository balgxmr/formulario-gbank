export default function Tarjeta({ nombre, fecha, comentarios }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 border border-gray-200 hover:shadow-lg transition">
      <h3 className="text-lg font-semibold text-indigo-700 mb-2">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-1">Fecha: {fecha.split("-").reverse().join("/")}</p>
      <p className="text-gray-700">{comentarios}</p>
    </div>
  );
}
