import Sidebar from "../components/Sidebar";
import SidebarLayout from "../components/SidebarLayout";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";

function Faltas() {
    const colunas = ["Disciplina", "Total de Faltas", "% de presença"];

  const faltas20261 = [
    { disciplina: "Construção de Frontend", faltas: "0", presenca: "100%" },
    { disciplina: "BI e Data Warehousing", faltas: "0", presenca: "100%" },
    { disciplina: "Manutenção de Software e DevOps", faltas: "0", presenca: "100%" },
  ]

  const faltas20252 = [
    { disciplina: "Construção de Backend", faltas: "0", presenca: "100%" },
    { disciplina: "Estrutura de Dados", faltas: "0", presenca: "100%" },
    { disciplina: "Gerenciamento de Projetos", faltas: "0", presenca: "100%" },
  ]
  return (
    <SidebarLayout>
      <TableCard title="2026.1" headers={colunas} items={faltas20261}/>
      <TableCard title="2025.2" headers={colunas} items={faltas20252}/>
    </SidebarLayout>
  );
}

export default Faltas;
