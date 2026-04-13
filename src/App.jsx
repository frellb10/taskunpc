import Header from './components/Header';
import ListaTareas from './components/ListaTareas';
import { tareasIniciales } from './data/tareasIniciales';

function App() {
  const pendientes = tareasIniciales.filter(tarea => !tarea.completada).length;

  return (
    <div>
      <Header tareasPendientes={pendientes} />
      <ListaTareas />
    </div>
  );
}

export default App;