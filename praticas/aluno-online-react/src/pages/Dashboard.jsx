import Card from "../components/Card";
import SidebarLayout from "../components/SidebarLayout";

function Dashboard() {
  const avisos = [
    "Inscrição para o projeto de extensão",
    "Eleição para representante de turma",
  ];

  const datas = [
    "23/02 - Início do período letivo 2026-1",
    "25/04 - Prazo final para aplicação da P1",
    "23/06 - Prazo final para aplicação da P2",
    "04/07 - Fim do período letivo 2026-1",
  ];

  const disciplinas = ["Construção de Frontend", "BI e Data Warehousing"];

  return (
    <>
      <Card title="Mural de Avisos" items={avisos} />
      <Card title="Calendário Acadêmico" items={datas} />
      <Card title="Minhas Disciplinas" items={disciplinas} />
    </>
  );
}

export default Dashboard;
