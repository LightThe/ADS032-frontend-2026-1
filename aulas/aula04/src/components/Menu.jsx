import { Link, NavLink } from "react-router";
import "./Menu.css";

export default function Menu() {
    const usuarioID = 123; // Exemplo de ID do usuário, pode ser dinâmico
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Página Inicial</NavLink>
        </li>
        <li>
          <NavLink to={`/perfil/${usuarioID}`}>Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
        <li>
          <NavLink to="/settings">Configurações</NavLink>
        </li>
        <li>
          <Link to="/login">Sair</Link>
        </li>
      </ul>
    </nav>
  );
}
