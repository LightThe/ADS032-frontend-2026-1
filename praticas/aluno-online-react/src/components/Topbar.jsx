import avatar from '../assets/avatar.svg';

function Topbar() {
  return (
    <>
      <header className='flex justify-between'>
        <h1 className='text-4xl font-bold'>Olá, aluno!</h1> {/* Se eu tivesse p(rop)s eu passaria elas AQUI heheheh */}
        <img src={avatar} alt="Ícone do usuário" />
      </header>
    </>
  );
}

export default Topbar;
