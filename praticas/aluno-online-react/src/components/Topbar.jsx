import avatar from "../assets/avatar.svg";
import useAuth from "../hooks/useAuth";

function Topbar() {
  const { usuario } = useAuth();
  return (
    <>
      <header className="flex justify-between">
        <h1 className="text-4xl font-bold">
          Olá, {usuario.nome ? usuario.nome : "Aluno"}!
        </h1>
        <img src={avatar} alt="Ícone do usuário" />
      </header>
    </>
  );
}

export default Topbar;
