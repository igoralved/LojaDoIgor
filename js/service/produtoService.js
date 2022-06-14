
import axios from 'axios';


export const sum = (a,b) => {
    return a + b
}

testForSum: sum

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
            console.log(resposta);
            return resposta.json();
        }
    )
}

export const adicionarProduto = (nome,preco,descricao,imagem,categoria) => {
    return fetch(`http://localhost:3000/profile`,
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(
            {
                nome:nome,
                preco:preco,
                descricao:descricao,
                imagem:imagem,
                categoria:"Star Wars",
            }
        )
    }).then(
        resposta =>
        resposta.json()
    )
}


export const produtoService = {
    listaProdutos,
    obtemProduto,
    adicionarProduto,
}


