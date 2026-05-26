import { NavLink, Link } from "react-router";
import logo from "../assets/learn.svg";
import useAuth from "../hooks/useAuth";

function Sidebar() {
  const {logout} = useAuth();

  const activeStyles = ({ isActive }) => (isActive ? "text-blue-600 text-lg" : undefined);
  
  return (
    <>
      <aside className="hidden md:block bg-gray-100 w-64 p-4">
        <header className="flex justify-around mb-8">
          <img src={logo} alt="Icone do chapeu de formatura" />
          <h2 className="text-2xl font-bold">Aluno Online</h2>
        </header>
        <nav>
          <ul className="list-disc m-8 font-bold">
            <li>
              <NavLink className={activeStyles} to="/">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink className={activeStyles} to="/notas">
                Notas
              </NavLink>
            </li>
            <li>
              <NavLink className={activeStyles} to="/faltas">
                Faltas
              </NavLink>
            </li>
            <li>
              <NavLink className={activeStyles} to="/boletos">
                Boletos
              </NavLink>
            </li>
            <li>
              <NavLink className={activeStyles} to="/requerimentos">
                Requerimentos
              </NavLink>
            </li>
            <li>
              <Link to="/login" onClick={logout}>Sair</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
