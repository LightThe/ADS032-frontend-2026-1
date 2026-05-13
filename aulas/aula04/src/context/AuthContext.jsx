import { createContext, useState } from "react";

// Cria o contexto
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = (dados) => {
    //chamar a API passando dados.usuario e dados.senha
    console.log(`Usuario: ${dados.usuario}, Senha: ${dados.senha}`);
    setUsuario({ _id: 123, nome: "Jooj", email: dados.usuario });
    setLogado(true);
  };

  const logout = () => {
    setUsuario({});
    setLogado(false);
  };

  return (
    <AuthContext.Provider value={{ usuario, logado, login, logout }}>
      {/* value = estado compartilhado */}
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
