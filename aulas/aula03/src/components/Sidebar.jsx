import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar() {
  return (
    <aside className="bg-surface-container text-on-surface-variant hidden md:block p-8">
      <header className='flex items-center'>
        <img src={logo} alt="Logo da aplicação" />
        <h1 className='text-4xl font-bold'>Aluno Online</h1>
      </header>
      <Menu />
    </aside>
  );
}

export default Sidebar;
