import Sidebar from "../components/Sidebar";
import TableCard from "../components/TableCard";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-4">
        <Topbar />
        <h2 className="text-2xl">Histórico de notas por semestre</h2>
        <section>
          <TableCard />
          <TableCard />
          <TableCard />
        </section>
      </main>
    </>
  );
}

export default Notas;
