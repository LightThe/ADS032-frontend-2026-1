import Layout from "./Layout";  
import TableCard from "../components/TableCard";

function Notas() {
  return (
    <>
      <Layout title="Minhas Notas" subtitle="Histórico de Notas por semestre">
        <TableCard />
        <TableCard />
        <TableCard />
      </Layout>
    </>
  );
}

export default Notas;
