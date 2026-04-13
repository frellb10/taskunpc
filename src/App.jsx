import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { TareasProvider } from './context/TareasContext';
import { useTareas } from './context/TareasContext';
import Header from './components/Header';
import Inicio from './pages/Inicio';
import NuevaTarea from './pages/NuevaTarea';
import DetalleTarea from './pages/DetalleTarea';

function AppContent() {
  const { tareas } = useTareas();
  const pendientes = tareas.filter(t => !t.completada).length;

  return (
    <>
      <Header tareasPendientes={pendientes} />
      <nav>
        <Link to="/">Inicio</Link> | <Link to="/nueva">Nueva Tarea</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nueva" element={<NuevaTarea />} />
        <Route path="/tarea/:id" element={<DetalleTarea />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <TareasProvider>
        <AppContent />
      </TareasProvider>
    </BrowserRouter>
  );
}

export default App;