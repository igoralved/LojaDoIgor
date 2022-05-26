
import {listaProdutos, produtoService} from "./produtoService.js"

function procuraId(lista, id){
    for(let i of lista){
        if(i == id){
            return true;
        }
    }return false;
}


const criaNovaLinhaProduto = (nome, preco,descricao,imagem,categoria,id) => {
    const linhaNovoProduto = document.createElement('tr');

    const conteudo = `
    <td>
    <div class="descricaoProduto" id=${id}>
    <div >
        <img class="fotoProduto" src=${imagem} alt=${nome}>
    </div>
    <div class="informacoesProduto">
        <h1 class="nome">${nome}</h1>
        <h1 class="preco">R$${preco}</h1>
        <h1 class="descricaoProduto">${descricao}</h1>
    </div>
</div>
</td>
    `;
    linhaNovoProduto.innerHTML = conteudo;
    return linhaNovoProduto;
}

const criaSimilares = (nome, preco,descricao,imagem,categoria,id) => {
    const linhaNovoProduto = document.createElement('tr');

    const conteudo = `
    <td>
    <ul>
    <div class="descricaoProduto" id=${id}>
    <div >
        <img class="fotoProduto" src=${imagem} alt=${nome}>
    </div>
    </ul>
</div>
</td>
    `;
    linhaNovoProduto.innerHTML = conteudo;
    return linhaNovoProduto;
}

const produtotable = document.querySelector('[data-tabela]');
const similarestable = document.querySelector('[data-tabelaSimilares]');

const produtoId = localStorage.getItem('produtoId');
const produtoNome = localStorage.getItem('produtoNome');
const produtoPreco = localStorage.getItem('produtoPreco');
const produtoDescricao = localStorage.getItem('produtoDescricao');
const produtoImagem = localStorage.getItem('produtoImagem');
const produtoCategoria = localStorage.getItem('produtoCategoria');

console.log(produtoId);
produtoService.listaProdutos().then(
    data =>
    {
                    produtotable.appendChild(criaNovaLinhaProduto(produtoNome,produtoPreco,produtoDescricao,produtoImagem,
                        produtoCategoria,produtoId));   
    });

produtoService.listaProdutos().then(
        data =>{
            let size = 0;
            let ids = [];
            data.forEach(element => {
            if(element.categoria === produtoCategoria && produtoId != element.id){
                if(size < 6 && procuraId(ids, produtoId) == false){
            similarestable.appendChild(criaSimilares(element.nome,element.preco,
                element.descricao,element.imagem,
                element.categoria,element.id)); 
                ids.push(element.id);
                size++;
                }
            }
        }
        )}
    )
  
    var campoNome = document.getElementById('inputNome');
    var campoMensagem =document.getElementById('inputMensagem');
    
    campoNome.oninvalid = function(e){
        e.target.setCustomValidity('');
        if(e.target.value.length == 0){
            e.target.setCustomValidity('O campo nome não deve estar vazio');
        }else if(e.target.value.length > 40){
            e.target.setCustomValidity('O campo nome deve ter no máximo tamanho 40');
        }
    }
    
    campoMensagem.oninvalid = function(e){
        e.target.setCustomValidity('');
        if(e.target.value.length == 0){
            e.target.setCustomValidity('O campo mensagem não deve estar vazio');
        }else if(e.target.value.length > 120){
            e.target.setCustomValidity('O campo mensagem deve ter no máximo tamanho 120');
        }
    }