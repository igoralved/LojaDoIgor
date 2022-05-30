import {listaProdutos, produtoService, adicionarProduto} from "./produtoService.js"

const fileTypes = [
    "image/apng",
    "image/bmp",
    "image/gif",
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/svg+xml",
    "image/tiff",
    "image/webp",
    "image/x-icon"
  ];
  
  function validFileType(file) {
    return fileTypes.includes(file.type);
  }

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

function updateinputimage(){

    const input = document.querySelector("#botaoDragAndDrop");
    const preview = document.querySelector(".preview");

    while(preview.firstChild){
        preview.removeChild(preview.firstChild);
    }

    const curFiles = input.files;


    if(curFiles.length === 0){
        const para = document.createElement('img');
        para.class="imagemPreview";
        para.src = ".././img/dragAndDrop.png";
        para.width = "100"; 
        para.height = "100"; 
        preview.appendChild(para);
    }else{
        const file = curFiles[0];
        if(fileTypes.includes(file.type)){
            const image = document.createElement('img');
            image.class="imagemPreview";
            image.src = URL.createObjectURL(file);
            console.log(image.src);
            image.width = "100"; 
            image.height = "100"; 
            preview.appendChild(image);
        }

    }

}

function adicionaProduto(){
    var campoImagem = document.getElementById("botaoDragAndDrop");
    var campoNome = document.getElementById('nomeProduto');
    var campoPreco = document.getElementById('precoProduto');
    var campoDescricao = document.getElementById('descricaoProduto');

    var valido = true;
    campoImagem.setCustomValidity('');
    if(campoImagem.value.length == 0){
        campoImagem.setCustomValidity('O produto precisa de uma imagem');
        valido = false;
    }
    campoNome.setCustomValidity('');
    if(campoNome.value.length == 0){
        campoNome.setCustomValidity('O campo nome não pode estar vazio');
        valido = false;
    }else if(campoNome.value.length > 20){
        campoNome.setCustomValidity('O campo nome não pode ter mais de 20 caracteres');
        valido = false;
    }
    campoPreco.setCustomValidity('');
    if(campoPreco.value.length == 0){
        campoPreco.setCustomValidity('O campo preco não pode estar vazio');
        valido = false;
    }campoDescricao.setCustomValidity('');
    if(campoDescricao.value.length == 0){
        campoDescricao.setCustomValidity('O campo descricao não pode estar vazio');
        valido = false;
    }else if(campoDescricao.value.length > 150){
        campoDescricao.setCustomValidity('O campo descricao não pode ter mais de 150 caracteres');
        valido = false;
    }
    if(valido == true){
        produtoService.adicionarProduto(
            campoNome.value,campoPreco.value,campoDescricao.value,
            campoImagem.value.src,'');
        console.log('produto adicionado');
    }else{

    }
}

var botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener("click",enviaMensagem);

var botaoLogin = document.getElementById('botaoLogin');

botaoLogin.addEventListener("click",login);

const input = document.querySelector("#botaoDragAndDrop");

input.addEventListener('change',updateinputimage);

const botaoAdicionar = document.getElementById('botaoAdicionar');

botaoAdicionar.addEventListener("click",adicionaProduto);