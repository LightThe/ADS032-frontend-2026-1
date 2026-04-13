import logo from "../assets/learn.svg";

function Sidebar() {
  return (
    <>
      <aside className="hidden md:block bg-gray-100 w-64 p-4">
        <header className="flex justify-around mb-8">
          <img src={logo} alt="Icone do chapeu de formatura" />
          <h2 className="text-2xl font-bold">Aluno Online</h2>
        </header>
        <nav>
          <ul className="list-disc m-8 font-bold">
            <li>Dashboard</li>
            <li>Notas</li>
            <li>Faltas</li>
            <li>Boletos</li>
            <li>Requerimentos</li>
            <li>Sair</li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
