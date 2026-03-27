import "./App.css";
import lerne from "./assets/lerne.svg";

function Cabecalho() {
  return (
    <header>
      <h1>Titulo</h1>
    </header>
  );
}

function App() {
  return (
    <main>
      <img src={lerne} alt="Icone de chapeu de formatura" />
      <h1>Aluno Olaine</h1>
      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matricula-erro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senha-erro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
  // <div>
  //   <Cabecalho />
  //   <div>{2+2}</div>
  //   <img src={logo} alt="imagem" />
  //   <p></p>
  // </div>
}

export default App;
