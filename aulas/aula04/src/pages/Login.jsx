import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login({ usuario: "eu@eumesmo.com", senha: "123456" });
    navigate("/");
  };

  return (
    <>
      <h1>Insira seu endereço de email</h1>
      <p>
        O Power BI Desktop e o serviço Power BI trabalham melhor juntos. Entre
        para aprimorar sua colaboração e acessar o conteúdo organizacional
      </p>
      <section>
        <label htmlFor="email">E-mail</label>
        <input type="text" />
      </section>
      <section>
        <button onClick={handleLogin}>Continuar</button>
        <button>Cancelar</button>
      </section>
    </>
  );
}
