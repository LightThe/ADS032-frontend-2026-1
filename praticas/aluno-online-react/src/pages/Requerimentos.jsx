import Sidebar from "../components/Sidebar";
import SidebarLayout from "../components/SidebarLayout";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";

function Requerimentos() {
  const colunas = ["Tipo de Requerimento", "Data de solicitação", "Situação"];
  const requerimentos = [
    {
      tipoRequerimento: "Revisão de Menção",
      dataSolicitacao: "15/12/2025",
      situacao: "Indeferido",
    },
    {
      tipoRequerimento: "Dispensa de Disciplina",
      dataSolicitacao: "12/06/2025",
      situacao: "Indeferido",
    },
    {
      tipoRequerimento: "Trancamento de Matrícula",
      dataSolicitacao: "05/01/2024",
      situacao: "Deferido",
    },
    {
      tipoRequerimento: "Mudança de Turno",
      dataSolicitacao: "10/10/2023",
      situacao: "Deferido",
    },
    {
      tipoRequerimento: "Renovação de Matrícula",
      dataSolicitacao: "20/02/2023",
      situacao: "Deferido",
    },
  ];
  return <TableCard headers={colunas} items={requerimentos} />;
}

export default Requerimentos;
