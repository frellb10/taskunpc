import { useState } from 'react';
import { useTareas } from '../context/TareasContext';
import TareaCard from '../components/TareaCard';

function Inicio() {
  const { tareas } = useTareas();
  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter(tarea => {
    if (filtro === 'pendientes') return !tarea.completada;
    if (filtro === 'completadas') return tarea.completada;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => setFiltro('todas')}>Todas</button>
        <button onClick={() => setFiltro('pendientes')}>Pendientes</button>
        <button onClick={() => setFiltro('completadas')}>Completadas</button>
      </div>
      {tareasFiltradas.map(tarea => (
        <TareaCard key={tarea.id} {...tarea} />
      ))}
    </div>
  );
}

export default Inicio;