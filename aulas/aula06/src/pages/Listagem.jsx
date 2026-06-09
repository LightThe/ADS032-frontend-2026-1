import { Link } from "react-router";
import { listar, remover } from "../services/produtoService";
import { useEffect, useState } from "react";

export default function Listagem() {
  const [produtos, setProdutos] = useState([]);
  useEffect(() => {
    const carregarProdutos = async () => {
      const produtos = await listar();
      setProdutos(produtos);
    };
    carregarProdutos();
  }, []);

  const excluir = async (id) => {
    await remover(id);
    setProdutos(produtos.filter(item => item.id !== id));
  }

  return (
    <>
      <h1>Listagem de Produtos</h1>
      <Link to="/produtos/novo">✨✧★ Adicionar ☆ ✦✨ (＾◡＾) ✨✧</Link>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Preço</th>
            <th>Unidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.nome}</td>
              <td>{produto.preco}</td>
              <td>{produto.unidade}</td>
              <td>
                <Link to={`/produtos/editar/${produto.id}`}>✏️</Link>
                <Link to={`/produtos`} onClick={()=>excluir(produto.id)}>🗑️</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <footer
        style={{
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "8px 0",
          background: "#f8f8f8",
          borderTop: "1px solid #ddd",
          fontSize: "14px",
        }}
      >
        Pai, poso me chenoselolá
      </footer>
    </>
  );
}
