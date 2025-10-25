import { useState } from "react";
import Formulario from "./components/Formulario";
import Tarjeta from "./components/Tarjeta";

export default function App() {
  const [tarjetas, setTarjetas] = useState([]);

  const agregarTarjeta = (nuevaTarjeta) => {
    setTarjetas([...tarjetas, nuevaTarjeta]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Formulario onAgregarTarjeta={agregarTarjeta} />

      <div className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
        {tarjetas.map((t) => (
          <Tarjeta key={t.id} nombre={t.nombre} fecha={t.fecha} comentarios={t.comentarios} edad={t.edad} />
        ))}
      </div>
    </div>
  );
}
