import avatar from '../assets/avatar.svg'

function Topbar(props) {
  return (
    <header className='flex justify-between'>
      <h1 className='text-4xl font-bold'>{props.title}</h1>
      <img src={avatar} alt="Imagem do avatar" />
    </header>
  );
}

export default Topbar;
