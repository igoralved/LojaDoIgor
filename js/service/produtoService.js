

export const listaProdutos = () => {
    return fetch('http://localhost:3000/profile',
    {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(
        resposta => {
            return resposta.json();
        }
    )
}

export const obtemProduto = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`,
    {
        method: 'GET',
        headers:{
            'Content-Type':'application/json'
        },
    }).then(
        resposta => {
            return resposta.json();
        }
    )
}



export const produtoService = {
    listaProdutos,
    obtemProduto
}


