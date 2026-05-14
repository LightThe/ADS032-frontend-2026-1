import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function SidebarLayout() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 m-4">
        <Topbar />
        <h2 className="text-2xl">Bem-vindo ao portal do aluno</h2>
        <section>
            <Outlet />
        </section>
      </main>
    </>
  );
}
