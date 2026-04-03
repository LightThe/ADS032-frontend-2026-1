import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout({children}) {
  return (
    <>
      <Sidebar />
      <main className="p-4">
        <Topbar />
        {children}
      </main>
    </>
  );
}

export default Layout;
