import { useState } from "react";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import BotaoSubmit from "./BotaoSubmit";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";

function validarEmail(email) {
  // SIM (desculpa)
  return email.match(
    /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_'+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
  );
}

export default function FormLogin() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [emailErro, setEmailErro] = useState();
  const [senhaErro, setSenhaErro] = useState();
  const { login } = useAuth();
  const navigate = useNavigate();

  const updateEmail = (e) => {
    setEmail(e.target.value);
    setEmailErro();
  };

  const updateSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let canLogin = true;

    if (!email) {
      setEmailErro("E-mail é obrigatório");
      canLogin = false;
    }
    if (!senha) {
      setSenhaErro("Senha é obrigatório");
      canLogin = false;
    }
    if (!validarEmail(email)) {
      setEmailErro("Insira um e-mail válido");
      canLogin = false;
    }
    if (senha.length < 6) {
      setSenhaErro("A senha deve ter no mínimo 6 caracteres");
      canLogin = false;
    }

    if(canLogin){
      login();
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputEmail erro={emailErro} updateValor={updateEmail} />
      <InputSenha erro={senhaErro} updateValor={updateSenha} />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}
