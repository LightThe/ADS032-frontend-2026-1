import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Boletos() {
  return (
    <>
      <Sidebar />
      <main className="p-4">
        <Topbar />
        <h2>Meus Boletos</h2>
        <section></section>
      </main>
    </>
  );
}

export default Boletos;
