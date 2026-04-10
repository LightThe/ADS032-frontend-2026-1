import TableCard from "../components/TableCard";
import Layout from "./Layout";

function Faltas() {
  return (
    <>
      <Layout title="Minhas Faltas" subtitle="Histórico de Faltas por semestre">
        <TableCard />
        <TableCard />
        <TableCard />
      </Layout>
    </>
  );
}

export default Faltas;
