
import {listaProdutos, produtoService,adicionarProduto} from "./produtoService.js"



function login(){
    window.location.href="../.././telas/login.html";
}

function enviaMensagem(){

    var campoNome = document.getElementById('inputNome');
    var campoMensagem =document.getElementById('inputMensagem');
var valido = true;
    campoNome.setCustomValidity('');
        if(campoNome.value.length == 0){
            campoNome.setCustomValidity('O campo nome não deve estar vazio');
            valido = false;
        }else if(campoNome.value.length > 40){
            campoNome.setCustomValidity('O campo nome deve ter no máximo tamanho 40');
            valido = false;
        }
    
    campoMensagem.setCustomValidity('');
        if(campoMensagem.value.length == 0){
            campoMensagem.setCustomValidity('O campo mensagem não deve estar vazio');
            valido = false;
        }else if(campoMensagem.value.length > 120){
            campoMensagem.setCustomValidity('O campo mensagem deve ter no máximo tamanho 120');
            valido = false;
        }

    if(valido == true){
    console.log('enviando');
    }else{
        console.log('não enviando');
    }
}

function procuraId(lista, id){
    for(let i of lista){
        if(i == id){
            return true;
        }
    }return false;
}

function aux(){

    var itenssimilares = Array.from(document.getElementsByClassName('similares'));
    for(let p of itenssimilares){
        p.addEventListener("click", event =>{
            const id = p.querySelector(".descricaoProdutoSimilar").id;
            console.log(id);
            const url = `http://localhost:3000/profile/`+id;

            fetch(url).then(response =>{
                return response.json();
            }).then(data =>{
                localStorage.setItem('produtoId',
                data.id
            );
            localStorage.setItem('produtoPreco',
            data.preco);
            localStorage.setItem('produtoNome',
            data.nome);
            localStorage.setItem('produtoCategoria',data.categoria);
            localStorage.setItem('produtoImagem',data.imagem);
            localStorage.setItem('produtoDescricao',data.descricao);
                window.location.href = "./descricaoProduto.html"
            }
        )
        });
    }
}

const criaNovaLinhaProduto = (nome, preco,descricao,imagem,categoria,id) => {
    const linhaNovoProduto = document.createElement('tr');

    const conteudo = `
    <td class="produtoDescrito">
    <div class="descricaoProduto" id=${id}>
        <img class="fotoProduto" src=${imagem} alt=${nome}>
    <div class="informacoesProduto">
        <h1 class="nome">${nome}</h1>
        <h1 class="preco">R$${preco}</h1>
        <h1 class="descricaoProdutoLinha">${descricao}</h1>
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
    <td><ul class='similares'>
    <div class="descricaoProdutoSimilar" id=${id}>
    
        <img class="fotoProduto" src=${imagem} alt=${nome}>
    
    <a>
            ${nome}
        </a>
        <a>
            R$${preco}
        </a>
        <button type="submit" id="verProduto">Ver produto</button>
</div></ul>
</td>
    `;
    linhaNovoProduto.innerHTML = conteudo;
    return linhaNovoProduto;
}

function buscarProdutos(){
    console.log("trocou");
    
    const b = document.querySelector("#textoBuscar");
    const valorTexto = b.value;

    const url = `http://localhost:3000/profile`;

    fetch(url).then(response =>{
        return response.json();
    }).then(()=>{
            localStorage.setItem('filtro',valorTexto);
    window.location.href = "../.././telas/index.html";
    }
    );

}

const botaoBuscar = document.querySelector(".botaoBuscar");

    botaoBuscar.addEventListener(
        "click",
        buscarProdutos
    );

const produtotable = document.querySelector('[data-tabela]');
const similarestable = document.querySelector('[data-tabelaSimilares]');


const produtoId = localStorage.getItem('produtoId');
const produtoNome = localStorage.getItem('produtoNome');
const produtoPreco = localStorage.getItem('produtoPreco');
const produtoDescricao = localStorage.getItem('produtoDescricao');
const produtoImagem = localStorage.getItem('produtoImagem');
const produtoCategoria = localStorage.getItem('produtoCategoria');

var botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener("click",enviaMensagem);

var botaoLogin = document.getElementById('botaoLogin');

botaoLogin.addEventListener("click",login);

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
    ).then(aux);
  
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