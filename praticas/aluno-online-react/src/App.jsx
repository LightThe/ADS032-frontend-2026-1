import "./App.css";
import Dashboard from "./pages/Dashboard";
import Notas from "./pages/Notas";
import Faltas from "./pages/Faltas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import Login from "./pages/Login";
import { Route, Routes } from "react-router";
import SidebarLayout from "./components/SidebarLayout";
import RequerimentoForm from "./forms/RequerimentoForm";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<SidebarLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/faltas" element={<Faltas />} />
        <Route path="/boletos" element={<Boletos />} />
        <Route path="/requerimentos">
          <Route index element={<Requerimentos />} />
          <Route path="novo" element={<RequerimentoForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
