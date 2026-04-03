import Card from "../components/Card";
import Layout from "./Layout";

function Dashboard(){
    return (
    <>
      <Layout>
        <h2>Bem-vindo ao portal do aluno</h2>
        <section>
          <Card title="Mural de Avisos">
            <ul>
              <li>Eleição para representante</li>
              <li>Eleição para representante</li>
              <li>Eleição para representante</li>
            </ul>
          </Card>
          <Card title="Calendário Acadêmico">
            <ul>
              <li>23/04 - Aplicação P1</li>
              <li>23/04 - Aplicação P1</li>
              <li>23/04 - Aplicação P1</li>
            </ul>
          </Card>
          <Card title="Minhas disciplinas">
            <ul>
              <li>Construção de frontend</li>
              <li>Construção de frontend</li>
              <li>Construção de frontend</li>
            </ul>
          </Card>
        </section>
      </Layout>
    </>
  );
}
export default Dashboard