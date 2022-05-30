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


var botaoLogar = document.getElementById('loginButton');

botaoLogar.addEventListener("click",loga);

var botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener("click",enviaMensagem);