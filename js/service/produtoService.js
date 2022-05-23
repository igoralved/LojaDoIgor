
const criaNovaLinha = (nome, preco,descricao,imagem,categoria) => {
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
    <ul class=${classeAtual}>
    <li class="produto">
        <a>
            <img src=${imagem} alt=${descricao} class="imagemProduto">
        </a>
        <a>
            ${nome}
        </a>
        <a>
            R$${preco}
        </a>
        <a href="#">Ver produto</a>
    </li>
</ul>
</td>
    `;
    linhaNovoProduto.innerHTML = conteudo;
    return linhaNovoProduto;
}

const tabela1 = document.querySelector('[data-tabela1]');
const tabela2 = document.querySelector('[data-tabela2]');
const tabela3 = document.querySelector('[data-tabela3]');

//tabela.appendChild(criaNovaLinha('Star Wars'));


const http = new XMLHttpRequest();

http.open('GET','http://localhost:3000/profile');

http.send();

http.onload = () => 
{
    const data = JSON.parse(http.response);
    let totalStarWars = 0;
    let totalConsoles = 0;
    let totalDiversos = 0;
    data.forEach(elemento => {
        if(elemento.categoria === "Star Wars"){
            if(totalStarWars < 6){
            tabela1.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                elemento.categoria));
                totalStarWars++;
            }
        }else if(elemento.categoria === "Console"){
            if(totalConsoles < 6){
            tabela2.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                elemento.categoria));
                totalConsoles++;
            }
        }else if(elemento.categoria === "Diverso"){
            if(totalDiversos < 6){
            tabela3.appendChild(criaNovaLinha(elemento.nome,elemento.preco,elemento.descricao,elemento.imagem,
                elemento.categoria));
                totalDiversos++;
            }
        }
    });
}
