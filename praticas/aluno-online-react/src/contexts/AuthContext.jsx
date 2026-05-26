import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [autenticado, setAutenticado] = useState(false);
  const [usuario, setUsuario] = useState({});

  const login = () => {
    setUsuario({ nome: "Usuário que está logado", email: "usuario@email.com" });
    setAutenticado(true);
  };
  const logout = () => {
    setUsuario({});
    setAutenticado(false);
  };

  return (
    <AuthContext.Provider value={{ usuario, autenticado, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
