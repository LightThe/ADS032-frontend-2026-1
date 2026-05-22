import { useEffect, useState } from "react";
import gif from "../assets/tenor.gif";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [tarefas, setTarefas] = useState([]);

  const carregarDados = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setTarefas([
      { id: 1, descricao: "Fazer o trabalho", status: "aberta" },
      { id: 2, descricao: "Estudar API REST", status: "pendente" },
      { id: 3, descricao: "Entregar atividades práticas", status: "pendente" },
      { id: 4, descricao: "Revisar o conteúdo", status: "aberta" },
      { id: 5, descricao: "Assistir vídeoaula", status: "concluída" },
    ]);
  };

  useEffect(() => {
    const executar = async () => {
      await carregarDados();
      setIsLoading(false);
    };
    executar();
  }, []);

  return (
    <>
      <h1>Página inicial</h1>
      <h2>Minhas tarefas do dia</h2>
      {isLoading ? (
        <>
          <img className="w-50" src={gif} />
          <table className="animate-pulse">
            <thead>
              <tr className="bg-gray-400">
                <th className="w-40 h-8"></th>
                <th className="w-40 h-8"></th>
                <th className="w-40 h-8"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
              </tr>
              <tr>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
              </tr>
              <tr>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
                <td><div className="m-1 py-3 rounded bg-gray-400"></div></td>
              </tr>
            </tbody>
          </table>
        </>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Descrição</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tarefas.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.descricao}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
