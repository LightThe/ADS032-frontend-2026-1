import { Link, NavLink } from "react-router";
import "./Menu.css";
import { useAuth } from "../context/AuthContext";

export default function Menu() {
  const {logout, usuario} = useAuth();

  return (
    <nav>
      <h4>{usuario.nome}</h4>
      <h5>{usuario.email}</h5>
      <ul>
        <li>
          <NavLink to="/">Página Inicial</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuario._id}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configurações</NavLink>
        </li>
        <li>
          <Link to="/login" onClick={logout}>Sair</Link>
        </li>
      </ul>
    </nav>
  );
}
