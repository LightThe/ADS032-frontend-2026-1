import Sidebar from "../components/Sidebar";
import SidebarLayout from "../components/SidebarLayout";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";

function Notas() {
  const colunas = ["Disciplina", "A1", "A2", "A3", "Menção"];

  const notas20261 = [
    { disciplina: "Construção de Frontend", a1: "", a2: "", a3: "", mencao: "SR" },
    { disciplina: "BI e Data Warehousing", a1: "", a2: "", a3: "", mencao: "SR" },
    { disciplina: "Manutenção de Software e DevOps", a1: "", a2: "", a3: "", mencao: "SR" },
  ]

  const notas20252 = [
    { disciplina: "Construção de Backend", a1: "6.5", a2: "6.2", a3: "", mencao: "MM" },
    { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "", mencao: "MM" },
    { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "", mencao: "MS" },
  ]
  return (
    <SidebarLayout>
      <TableCard title="2026.1" headers={colunas} items={notas20261} />
      <TableCard title="2025.2" headers={colunas} items={notas20252} />
    </SidebarLayout>
  );
}

export default Notas;
