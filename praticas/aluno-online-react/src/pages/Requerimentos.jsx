import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import SidebarLayout from "../components/SidebarLayout";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";
import { useEffect, useState } from "react";
import { listar } from "../services/requerimentoService";

function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState([]);
  const navigate = useNavigate();
  const colunas = ["Tipo de Requerimento", "Data de solicitação", "Situação"];

  useEffect(()=>{
    const obterRequerimentos = async () => {
      const res = await listar();
      setRequerimentos(res.map((item)=>{
        return {tipo: item.tipo, data: item.data, situacao: "criado"}
      }));
    }
    obterRequerimentos();
  }, []);

  return (
    <>
      <button className="border-blue-800 border-2 py-2 px-4 rounded mt-4" onClick={() => navigate("/requerimentos/novo")}>
        ➕ Novo Requerimento
      </button>
      <h2 className="text-2xl mt-8">Meus requerimentos</h2>
      <TableCard headers={colunas} items={requerimentos} />
    </>
  );
}

export default Requerimentos;
