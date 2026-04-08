import Sidebar from "../components/Sidebar";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-4">
        <Topbar />
        <h2 className="text-2xl">Histórico de pagamentos</h2>
        <section>
          <TableCard />
        </section>
      </main>
    </>
  );
}

export default Boletos;
