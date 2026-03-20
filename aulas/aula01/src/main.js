import "./style.css";

const botaoEntrar = document.querySelector("button");

botaoEntrar.addEventListener("click", (e) => {
  const inputMatricula = document.querySelector("#matricula");
  const inputSenha = document.querySelector("#senha");

  const matriculaErro = document.querySelector("#matricula-erro");
  const senhaErro = document.querySelector("#senha-erro");
  matriculaErro.textContent = '';
  senhaErro.textContent = '';

  if (inputMatricula.value === "") {
    matriculaErro.textContent = "Matricula é obrigatório";
    return;
  }

  if (parseInt(inputMatricula.value) <= 0) {
    matriculaErro.textContent = "Matricula deve ser positivo";
    return;
  }

  if (inputSenha.value === "") {
    senhaErro.textContent = "Senha é obrigatório";
    return;
  }

  if (inputSenha.value.length < 8) {
    senhaErro.textContent = "Senha deve ser grande e revoltante";
    return;
  }

  console.log("keep feeling, _validation_!");
});
