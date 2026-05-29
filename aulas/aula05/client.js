const url = 'http://localhost:5173/produtos';

async function criar(produto) {
    try{
        const resposta = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(produto),
            headers: {
                "content-type": "application/json"
            }
        })
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao criar produto:', erro.message);
    }
}

async function obter(produto) {
    try {
        const resposta = await fetch(`${url}/${produto.id}`);
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao obter produto:', erro.message);
    }
}

async function listar() {
    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao listar produtos:', erro.message);
    }
}

async function modificar(produto) {
    try {
        const resposta = await fetch(`${url}/${produto.id}`, {
            method: 'PUT',
            body: JSON.stringify(produto),
            headers: {
                "content-type": "application/json"
            }
        })
        const dados = await resposta.json();
        return dados;
    } catch (erro) {
        console.error('Erro ao modificar produto:', erro.message);
    }
}

async function remover(produto) {
    try {
        const resposta = await fetch(`${url}/${produto.id}`, {
            method: 'DELETE'
        })
        return resposta.ok;
    } catch (erro) {
        console.error('Erro ao remover produto:', erro.message);
    }
}

export { criar, obter, listar, modificar, remover };