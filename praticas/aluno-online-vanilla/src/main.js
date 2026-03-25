import "./style.css";

const formLogin = document.querySelector("form");

formLogin.addEventListener("submit", (e) => {
  const inputEmail = document.querySelector("#email");
  const inputSenha = document.querySelector("#senha");
  const emailErro = document.querySelector("#email-erro");
  const senhaErro = document.querySelector("#senha-erro");

  emailErro.textContent = "";
  senhaErro.textContent = "";

  var formValid = true;
  if (inputEmail.value === "") {
    emailErro.textContent = "O campo de e-mail é obrigatório";
    formValid = false;
  }

  if (inputSenha.value === "") {
    senhaErro.textContent = "O campo de senha é obrigatório";
    formValid = false;
  }

  if (formValid) {
    location.href = "/";
  }

  e.preventDefault();
});
