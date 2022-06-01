
import {listaProdutos, produtoService} from "./produtoService.js";

function login(){
    window.location.href="../.././telas/login.html";
}

function procuraId(lista, id){
    for(let i of lista){
        if(i == id){
            return true;
        }
    }return false;
}

function adicionarProduto(){
    window.location.href = "../.././telas/secaoNovoProduto.html";
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

const criaNovoProduto = (nome, preco,descricao,imagem,categoria,id) => {
    const linhaNovoProduto = document.createElement('tr');

    const conteudo = `
    <td class="produto">
        <a class="imagemProduto">
            <img src=${imagem} alt=${descricao} class="imagemProduto">
        </a>
        <a>
            ${nome}
        </a>
        <a>
            R$${preco}
        </a>
</td>
    `;

    linhaNovoProduto.innerHTML = conteudo;

    return linhaNovoProduto;
}


function buscarProdutos(){
    console.log("trocou");

    const url = `http://localhost:3000/profile`;

    fetch(url).then(response =>{
        return response.json();
    }).then(()=>{
        const b = document.querySelector("#textoBuscar");
    const valorTexto = b.value;
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


const tabela = document.querySelector('[data-tabela]');

var botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener("click",enviaMensagem);

var botaoLogin = document.getElementById('botaoLogin');

botaoLogin.addEventListener("click",login);


var botaoAdicionarProduto = document.getElementById('botaoAdicionarProduto');

botaoAdicionarProduto.addEventListener("click",adicionarProduto);

produtoService.listaProdutos().then(
    data =>
    {

            data.forEach(elemento => {
                console.log(elemento.imagem);
                if(true){
                        tabela.appendChild(criaNovoProduto(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                        elemento.categoria,elemento.id));
                    }   
                }
            )
            }
)
