import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard() {
  const avisos = ["Eleição para representante", "Participe do IESB-SE"];

  const datas = [
    "23/04 - Avaliação P1",
    "04/05 - Transferência de Curso",
    "07/06 - Renovação de Matrícula",
  ];

  const disciplinas = [
    "Construção de Frontend",
    "Devops",
    "BI e Data Warehousing",
  ];

  return (
    <>
      <Layout title="Olá, aluno" subtitle="Bem-vindo ao portal do aluno">
        <Card title="Mural de Avisos" items={avisos} />
        <Card title="Calendário Acadêmico" items={datas} />
        <Card title="Minhas Disciplinas" items={disciplinas} />
      </Layout>
    </>
  );
}
export default Dashboard;
