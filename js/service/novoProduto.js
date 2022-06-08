
import {listaProdutos, produtoService, adicionarProduto} from "./produtoService.js";



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

  function saveImage(image){

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
        para.src = "/img/dragAndDrop.png";
        para.width = "100"; 
        para.height = "100"; 
        preview.appendChild(para);
    }else{
        const file = curFiles[0];
        if(validFileType(file)){

            var reader = new FileReader();

            const image = document.createElement('img');
            image.class="imagemPreview";
            image.src = URL.createObjectURL(file);
            console.log(image.src);
            image.width = "100"; 
            image.height = "100"; 

            
            
            preview.appendChild(image);
            reader.readAsDataURL(file);
        }

    }

}
/*
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
    }else if(!file_exists(campoImagem.value)){
        campoImagem.setCustomValidity('Imagem inexsitente');
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
    if(valido){
        var imageObj = new Image(10,10);
        imageObj.src=novaimagem2;
        imageObj.save("../.././img",{});
        console.log(imageObj.src);
        produtoService.adicionarProduto(
            campoNome.value,campoPreco.value,campoDescricao.value,
            campoImagem.value,'').then(response => {
                    window.location.href = "../.././telas/secaoTodosProdutos.html";
            }
            );
    }else{
        console.log('produto não adicionado');
    }
}*/

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

var botaoEnviar = document.getElementById('botaoEnviar');

botaoEnviar.addEventListener("click",enviaMensagem);

var botaoLogin = document.getElementById('botaoLogin');

botaoLogin.addEventListener("click",login);

const input = document.querySelector("#botaoDragAndDrop");

input.addEventListener('change',updateinputimage);

const botaoAdicionar = document.querySelector('[data-form]');

botaoAdicionar.addEventListener('submit',(evento) => {
    evento.preventDefault();

    const campoImagem = evento.target.querySelector('[data-imagem]');
    alert(campoImagem.value);
    const campoNome = evento.target.querySelector('[data-nome]');
    const campoPreco = evento.target.querySelector('[data-preco]');
    const campoDescricao = evento.target.querySelector('[data-descricao]');

    var imagem = campoImagem.value;
    var nome = campoNome.value;
    var preco = parseFloat(campoPreco.value).toFixed(2);
    var descricao = campoDescricao.value;
    var valido = true;
    campoImagem.setCustomValidity('');
    if(imagem.length == 0){
        campoImagem.setCustomValidity('O produto precisa de uma imagem');
        valido = false;
    }
    campoNome.setCustomValidity('');
    if(nome.length == 0){
        campoNome.setCustomValidity('O campo nome não pode estar vazio');
        valido = false;
    }else if(nome.length > 20){
        campoNome.setCustomValidity('O campo nome não pode ter mais de 20 caracteres');
        valido = false;
    }
    campoPreco.setCustomValidity('');
    if(preco.length == 0){
        campoPreco.setCustomValidity('O campo preco não pode estar vazio');
        valido = false;
    }
        
    campoDescricao.setCustomValidity('');
    if(descricao.length == 0){
        campoDescricao.setCustomValidity('O campo descricao não pode estar vazio');
        valido = false;
    }else if(descricao.length > 150){
        campoDescricao.setCustomValidity('O campo descricao não pode ter mais de 150 caracteres');
        valido = false;
    }
    if(valido){
        console.log('produto adicionado');
        var novaimagem = imagem.substring(imagem.lastIndexOf('\\'));
        novaimagem = novaimagem.substr(1);
        var novaimagem2 = "/img/" + novaimagem;
        
        const file = document.querySelector('[data-imagem]').files[0];
        if(file){
               

        fetch(
            `http://localhost:3000/profile`,{
         method:'POST',
            headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(
            {
                nome: nome,
                preco: preco,
                descricao: descricao,
                imagem: novaimagem2, 
                categoria: "Star Wars",
            }
        )
    }).then(
        () => {
            window.location.href = '../.././telas/secaoTodosProdutos.html';
        }
    );
    }else{
        alert('produto não adicionado');
    }
}});

