import avatar from '../assets/avatar.svg'

function Topbar() {
  return (
    <header className='flex justify-between'>
      <h1>Olá, Aluno</h1>
      <img src={avatar} alt="Imagem do avatar" />
    </header>
  );
}

export default Topbar;
