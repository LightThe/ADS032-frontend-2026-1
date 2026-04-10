import TableCard from "../components/TableCard";
import Layout from "./Layout";

function Boletos() {
  const colunas = ["Vencimento", "Valor", "Situação"];
  const boletos = [
    { vencimento: "05/04/2026", valor: 500.0, situacao: "Pago" },
    { vencimento: "05/05/2026", valor: 500.0, situacao: "A Vencer" },
    { vencimento: "05/06/2026", valor: 500.0, situacao: "A Vencer" },
    { vencimento: "05/07/2026", valor: 500.0, situacao: "A Vencer" },
    { vencimento: "05/08/2026", valor: 500.0, situacao: "A Vencer" },
  ];
  return (
    <>
      <Layout title="Meus Boletos" subtitle="Histórico de pagamentos">
        <TableCard headers={colunas} items={boletos}/>
      </Layout>
    </>
  );
}

export default Boletos;
