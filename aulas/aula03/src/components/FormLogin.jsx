import { useState } from "react";
import InputMatricula from "../components/InputMatricula";
import InputSenha from "../components/InputSenha";
import BotaoSubmit from "../components/BotaoSubmit";


export default function FormLogin() {
  const [matricula, setMatricula] = useState();
  const [senha, setSenha] = useState();
  const [matriculaErro, setMatriculaErro] = useState();
  const [senhaErro, setSenhaErro] = useState();

  const validarFormulario = (e) => {
    e.preventDefault();

    if (!matricula) {
      setMatriculaErro("Matrícula é obrigatório");
    }
    if (!senha) {
      setSenhaErro("Senha é obrigatório");
    }
  };

  const updateMatricula = (e) => {
    setMatricula(e.target.value);
    setMatriculaErro();
  };
  const updateSenha = (e) => {
    setSenha(e.target.value);
    setSenhaErro();
  };

  return (
    <form action="#" method="post" onSubmit={validarFormulario}>
      <InputMatricula
        valor={matricula}
        erro={matriculaErro}
        updateValor={updateMatricula}
      />
      <InputSenha valor={senha} erro={senhaErro} updateValor={updateSenha} />
      <BotaoSubmit>Entrar</BotaoSubmit>
    </form>
  );
}
