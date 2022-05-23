
export const CategoriaProduto = [
    StarWars,
    Console,
    Diverso
]

export class Produto {

    Produto(imagem,nome,preco,descricao,categoria){
        this.imagem = imagem;
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
        this.categoria = categoria;
    }
}