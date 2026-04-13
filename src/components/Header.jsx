function Header({ tareasPendientes }) {
  return (
    <header>
      <h1>TaskUPC</h1>
      <p>Tareas pendientes: {tareasPendientes}</p>
    </header>
  );
}

export default Header;