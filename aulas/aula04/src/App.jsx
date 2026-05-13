import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Erro404 from "./pages/Erro404";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const {logado} = useContext(AuthContext);

  return (
    <Routes>
      {logado ? (
        <Route element={<Layout />}> {/* Isso é um template */}
          <Route index element={<Home />} />
          <Route path="/perfil/:id" element={<Perfil />} />
          <Route path="/about" element={<About />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      ) : (
        <Route path="/" element={<Login />} />
      )}
      <Route path="/*" element={<Erro404 />} />
    </Routes>
  );
}
