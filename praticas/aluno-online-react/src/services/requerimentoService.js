const url = 'http://localhost:3000/requerimentos'

const listar = async () => {
    try {
        const res = await fetch(url)
        const dados = await res.json();
        return dados;
    } catch (error) {
        console.error('Erro ao listar requerimentos:', error.message);
    }
}

const criar = async (requerimento) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(requerimento),
            headers: {
                "content-type": "application/json"
            }
        })
        const dados = await res.json();
        return dados;
    } catch (error) {
        console.error('Erro ao criar requerimento:', error.message);
    }
}

export {listar, criar}