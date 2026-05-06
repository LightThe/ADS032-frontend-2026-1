import { useState } from "react";
import InputEmail from "./InputEmail";
import InputSenha from "./InputSenha";
import BotaoSubmit from "./BotaoSubmit";

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
    if(email){
        if (!validarEmail(email)) {
          setEmailErro("Insira um e-mail válido");
        }
    }
    else{
        setEmailErro("E-mail é obrigatório")
    }
    if (!senha) {
      setSenhaErro("Senha é obrigatório");
    }
    else if (senha.length < 6) {
        setSenhaErro("A senha deve ter no mínimo 6 caracteres");
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
