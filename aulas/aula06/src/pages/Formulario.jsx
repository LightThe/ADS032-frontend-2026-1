import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router";
import { criar, modificar, obter } from "../services/produtoService.js";
import { useEffect, useState } from "react";

export default function Formulario() {
  const [produto, setProduto] = useState(null);
  const { register, handleSubmit } = useForm({
    values: produto || { nome: "", preco: "", unidade: "" },
  });
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const carregarProduto = async () => {
        const produto = await obter(id);
        setProduto(produto);
      };
      carregarProduto();
    }
  }, [id]);

  const salvar = async (dados) => {
    console.log(dados);
    if (id) {
      await modificar({ id, ...dados });
    } else {
      await criar(dados);
    }
    navigate("/produtos");
  };

  return (
    <>
      <h1>Cadastro de Produtos</h1>
      <form onSubmit={handleSubmit(salvar)}>
        <input type="text" placeholder="nome" {...register("nome")} />
        <input type="text" placeholder="preço" {...register("preco")} />
        <input type="text" placeholder="unidade" {...register("unidade")} />
        <Link to="/produtos">Canselá</Link>
        <button type="submit">Salvar</button>
      </form>

      <p>{produto?.nome}</p>
    </>
  );
}
