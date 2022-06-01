import {listaProdutos, produtoService,adicionarProduto} from "./produtoService.js";

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

function loga(){
    var campoEmail = document.getElementById('emailInput');
    var campoSenha =document.getElementById('senhaInput');
    var valido = true;
    campoEmail.setCustomValidity('');
    if(campoEmail.value.length == 0){
        campoEmail.setCustomValidity('O campo email não deve estar vazio');
        valido = false;
    }else if(campoEmail.value.search("@") == -1 || campoEmail.value.search(".") == -1){
        campoEmail.setCustomValidity('O campo email está inválido');
        valido = false;
    }

    campoSenha.setCustomValidity('');
    if(campoSenha.value.length == 0){
        campoSenha.setCustomValidity('O campo senha não deve estar vazio');
        valido = false;
    }

    if(valido == true){
        console.log('valido');
    }else{
        console.log('invalido');
    }
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


var botaoLogar = document.getElementById('loginButton');

botaoLogar.addEventListener("click",loga);

var botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener("click",enviaMensagem);

const botaoBuscar = document.querySelector(".botaoBuscar");

    botaoBuscar.addEventListener(
        "click",
        buscarProdutos
    );