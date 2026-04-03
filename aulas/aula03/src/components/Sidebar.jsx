import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {
  return (
    <aside className="bg-gray-200 hidden dark:bg-gray-600 md:block p-8">
      <header>
        <img src={logo} alt="Logo da aplicação" />
        <h1>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;
