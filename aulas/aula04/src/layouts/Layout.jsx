import { Navigate, Outlet } from "react-router";
import Menu from "../components/Menu";
import { useAuth } from "../context/AuthContext";

export default function Layout() {
  const { logado } = useAuth();

  return (
    <>
      {logado ? (
        <>
          <aside>
            <Menu />
          </aside>
          <main>
            <Outlet />
          </main>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
Layout;
