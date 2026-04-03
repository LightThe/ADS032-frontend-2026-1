import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Notas() {
  return (
    <>
      <Sidebar />
      <main className="p-4">
        <Topbar />
        <h2>Minhas Notas</h2>
        <section></section>
      </main>
    </>
  );
}

export default Notas;
