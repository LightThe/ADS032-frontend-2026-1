import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      <main className="p-8 flex-1">
        <Topbar title={props.title} />
        <h2>{props.subtitle}</h2>
        <section>
          {props.children}
        </section>
      </main>
    </>
  );
}

export default Layout;
