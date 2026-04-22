import Sidebar from "../components/Sidebar";
import SidebarLayout from "../components/SidebarLayout";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";

function Boletos() {
  const colunas = ["Vencimento", "Valor R$", "Situação"];
  const boletos = [
    { vencimento: "19/01/2026", valor: 500.0, situacao: "Pago" },
    { vencimento: "19/02/2026", valor: 500.0, situacao: "Em atraso" },
    { vencimento: "19/03/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/04/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/05/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/06/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/07/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/08/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/09/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/10/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/11/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/12/2026", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/01/2027", valor: 500.0, situacao: "A Pagar" },
    { vencimento: "19/02/2027", valor: 500.0, situacao: "A Pagar" },
  ];
  return (
    <SidebarLayout>
      <TableCard headers={colunas} items={boletos} />
    </SidebarLayout>
  );
}

export default Boletos;
