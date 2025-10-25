import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Tarjeta from "./components/Tarjeta";

export default function App() {
  const [tarjetas, setTarjetas] = useState(() => {
    const almacenadas = localStorage.getItem("tarjetas");
    return almacenadas ? JSON.parse(almacenadas) : [];
  });

  // Cargar desde localStorage al iniciar
  useEffect(() => {
    const almacenadas = localStorage.getItem("tarjetas");
    if (almacenadas) {
      setTarjetas(JSON.parse(almacenadas));
    }
  }, []);

  // Guardar cada vez que cambian
  useEffect(() => {
    localStorage.setItem("tarjetas", JSON.stringify(tarjetas));
  }, [tarjetas]);

  const agregarTarjeta = (nuevaTarjeta) => {
    setTarjetas([...tarjetas, nuevaTarjeta]);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Formulario onAgregarTarjeta={agregarTarjeta} />
      <div className="max-w-3xl mx-auto grid gap-4 sm:grid-cols-2">
        {tarjetas.map((t) => (
          <Tarjeta key={t.id} {...t} />
        ))}
      </div>
    </div>
  );
}
