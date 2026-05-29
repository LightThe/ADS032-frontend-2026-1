import { criar, obter, listar, modificar, remover } from "./client.js";

async function teste() {
  let resposta = await criar({ nome: "Banana", preco: 12.5, unidade: "kg" });
  console.log("Criado:", resposta);

  resposta = await listar();
  console.log("Produtos listados:", resposta);

  resposta = await obter({ id: resposta[0].id });
  console.log("Produto consultado:", resposta);

  resposta = await modificar({id: resposta.id, nome: "Banana (da terra)", preco: 10.0, unidade: "TB" });
  console.log("Produto atualizado:", resposta);

  const sucesso = await remover({ id: resposta.id });
  console.log("Produto removido:", sucesso);
}

teste();
