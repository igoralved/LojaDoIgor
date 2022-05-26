

import {listaProdutos, produtoService} from "./produtoService.js";

function validaFormulario(campo,mensagem){
        campo.target.setCustomValidity(mensagem);
}



function procuraId(lista, id){
    for(let i of lista){
        if(i == id){
            return true;
        }
    }return false;
}

const criaNovaLinha = (nome, preco,descricao,imagem,categoria,id) => {
    const linhaNovoProduto = document.createElement('tr');

    let classeAtual = '';
    if(categoria === "Star Wars"){
        classeAtual = "produtosStarWars";
    }else if(categoria === "Console"){
        classeAtual = "produtosConsoles";
    }else if(categoria === "Diverso"){
        classeAtual = "produtosDiversos";
    }else{
        return linhaNovoProduto;
    }


    const conteudo = `
    <td>
    <ul class="${classeAtual}">
    <li class="produto" name="produto" id="${id}">
        <a>
            <img src=${imagem} alt=${descricao} class="imagemProduto">
        </a>
        <a>
            ${nome}
        </a>
        <a>
            R$${preco}
        </a>
        <button type="submit" id="verProduto">Ver produto</button>
    </li>
</ul>
</td>
    `;

    linhaNovoProduto.innerHTML = conteudo;

    return linhaNovoProduto;
}


function aux(){

    var itens1 = Array.from(document.getElementsByClassName('produtosStarWars'));
    var itens2 = Array.from(document.getElementsByClassName('produtosConsoles'));
    var itens3 = Array.from(document.getElementsByClassName('produtosDiversos'));
    
    console.log(itens1);
    for(let p of itens1){
        p.addEventListener("click", event =>{
            const id = p.querySelector(".produto").id;
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

    console.log(itens2);
    for(let p of itens2){
        p.addEventListener("click", event =>{
            console.log(p);
            const id = p.querySelector(".produto").id;
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

    console.log(itens3);
    for(let p of itens3){
        p.addEventListener("click", event =>{
            console.log(p);
            const id = p.querySelector(".produto").id;
            console.log(id);
            const url = `http://localhost:3000/profile/`+id;
    
            fetch(url).then(response =>{
                return response.json();
            }).then(data=>{
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
                window.location.href = "./descricaoProduto.html";
            }
            );
        });
    }
    
}

function recarregarPagina(){

    window.location.href = "./index.html";    

}

function buscarProdutos(){
    const b = document.querySelector("#textoBuscar");
    const valorTexto = b.value;
    localStorage.setItem('filtro',valorTexto);
    recarregarPagina();
    /*
    if(valorTexto.length == 0){
        if(lista === null){
            lista =
        produtoService.listaProdutos().then(
            data =>
            {
                    let totalStarWars = 0;
                    let totalConsoles = 0;
                    let totalDiversos = 0;
                    let ids1 = [];
                    let ids2 = [];
                    let ids3 = [];
        
                    data.forEach(elemento => {
                        if(elemento.categoria === "Star Wars"){
                            if(totalStarWars < 6 && procuraId(ids1,elemento.id) == false){
                                tabela1.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                elemento.categoria,elemento.id));
                                ids1.push(elemento.id);
                                totalStarWars++;
                            }
                        }else if(elemento.categoria === "Console"){
                            if(totalConsoles < 6 && procuraId(ids2,elemento.id) == false){
                                tabela2.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                elemento.categoria,elemento.id));
                                ids2.push(elemento.id);
                                totalConsoles++;
                            }
                        }else if(elemento.categoria === "Diverso"){
                            if(totalDiversos < 6 && procuraId(ids3,elemento.id) == false){
                                tabela3.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                elemento.categoria,elemento.id));
                                ids3.push(elemento.id);
                                totalDiversos++;
                            }
                        }
                    })
                }
        ).then(aux);
            }
    }else{
        if(lista === null){
            lista =
        produtoService.listaProdutos().then(
            data =>
            {
                const filtro = valorTexto; 
                data.forEach(elemento =>
                    {
                        if(elemento.nome ==filtro){
                            if(elemento.categoria === "Star Wars"){
                                tabela1.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                    elemento.categoria,elemento.id));
                            }else if(elemento.categoria === "Console"){
                                tabela2.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                    elemento.categoria,elemento.id));
                            }else if(elemento.categoria === "Diverso"){
                                tabela3.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                    elemento.categoria,elemento.id));
                            }
                        }
                    }
                )
            }
        )}
    }*/
    }


const botaoBuscar = document.querySelector(".botaoBuscar");

botaoBuscar.addEventListener(
    "click",
    buscarProdutos
);

const tabela1 = document.querySelector('[data-tabela1]');
const tabela2 = document.querySelector('[data-tabela2]');
const tabela3 = document.querySelector('[data-tabela3]');

    const http = new XMLHttpRequest();

    http.open('GET','http://localhost:3000/profile');
    
    http.send();

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

const item = localStorage.getItem('filtro');

if(item.length == 0){
    produtoService.listaProdutos().then(
        data =>
        {
                let totalStarWars = 0;
                let totalConsoles = 0;
                let totalDiversos = 0;
                let ids1 = [];
                let ids2 = [];
                let ids3 = [];
    
                data.forEach(elemento => {
                    if(elemento.categoria === "Star Wars"){
                        if(totalStarWars < 6 && procuraId(ids1,elemento.id) == false){
                            tabela1.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                            elemento.categoria,elemento.id));
                            ids1.push(elemento.id);
                            totalStarWars++;
                        }
                    }else if(elemento.categoria === "Console"){
                        if(totalConsoles < 6 && procuraId(ids2,elemento.id) == false){
                            tabela2.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                            elemento.categoria,elemento.id));
                            ids2.push(elemento.id);
                            totalConsoles++;
                        }
                    }else if(elemento.categoria === "Diverso"){
                        if(totalDiversos < 6 && procuraId(ids3,elemento.id) == false){
                            tabela3.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                            elemento.categoria,elemento.id));
                            ids3.push(elemento.id);
                            totalDiversos++;
                        }
                    }
                })
            }
    ).then(aux);
}else{
    const filtro = item; 
    produtoService.listaProdutos().then(
        data =>
        {
            data.forEach(elemento =>
                {
                    if(elemento.nome === filtro){
                        if(elemento.categoria === "Star Wars"){
                            tabela1.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                elemento.categoria,elemento.id));
                        }else if(elemento.categoria === "Console"){
                            tabela2.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                elemento.categoria,elemento.id));
                        }else if(elemento.categoria === "Diverso"){
                            tabela3.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                                elemento.categoria,elemento.id));
                        }
                    }
                }
            )
        }
    )
}    
    