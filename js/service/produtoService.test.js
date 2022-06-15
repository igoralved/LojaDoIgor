
import {produtoService,listaProdutos,obtemProduto,adicionarProduto} from "./produtoService.js";
import "isomorphic-fetch";


jest.mock('./produtoService.js');


describe("Service tests",() =>
{

    test('Test with get products (empty list)', () =>{
        const produtos = [];
        const resp = {profile: produtos};
        listaProdutos.mockResolvedValue(resp);
        return produtoService.listaProdutos().then(data => expect(data).toEqual(resp));
    });

    test('Test with get products (1 element list)', ()=>{
        const produtos = [{
            nome: "Console 1",
            preco: 25,
            descricao: "Recomendado",
            imagem: "/img/console1.png",
            categoria: "Console",
            id: 8
          }];
        const resp = {profile: produtos};
        listaProdutos.mockResolvedValue(resp);
        return produtoService.listaProdutos().then(data => expect(data).toEqual(resp));
    });

    test('Test with get products (more than one element list)', ()=>{
        const produtos = [{
            nome: "Boneco",
            preco: 20,
            descricao: "Recomendado",
            imagem: "/img/produtoStarWars1.png",
            categoria: "Star Wars",
            id: 1
          },
          {
            nome: "Boneco Star Wars 2",
            preco: 25,
            descricao: "Recomendado",
            imagem: "/img/produtoStarWars2.png",
            categoria: "Star Wars",
            id: 2
          }];
        const resp = {profile: produtos};
        listaProdutos.mockResolvedValue(resp);
        return produtoService.listaProdutos().then(data => expect(data).toEqual(resp));
    });


    test('Teste de obter um produto por ID', () => {
        const produtos = [{
            nome: "Boneco",
            preco: 20,
            descricao: "Recomendado",
            imagem: "/img/produtoStarWars1.png",
            categoria: "Star Wars",
            id: 1
          },
          {
            nome: "Boneco Star Wars 2",
            preco: 25,
            descricao: "Recomendado",
            imagem: "/img/produtoStarWars2.png",
            categoria: "Star Wars",
            id: 2
          }];
        const result = produtos[1];
        obtemProduto.mockResolvedValue(result);
        return produtoService.obtemProduto(2).then(data => expect(data).toEqual(result));
    })

    test('Teste de obter um produto por ID não encontrado', () => {
        const produtos = [{
            nome: "Boneco",
            preco: 20,
            descricao: "Recomendado",
            imagem: "/img/produtoStarWars1.png",
            categoria: "Star Wars",
            id: 1
          },
          {
            nome: "Boneco Star Wars 2",
            preco: 25,
            descricao: "Recomendado",
            imagem: "/img/produtoStarWars2.png",
            categoria: "Star Wars",
            id: 2
          }];
        const result = {};
        obtemProduto.mockResolvedValue(result);
        return produtoService.obtemProduto(3).then(data => expect(data).toEqual(result));
    })

    test('Teste de cadastrar um novo produto', () => {
        const produtos = [];
        const resp = {profile: produtos};
        adicionarProduto.mockResolvedValue(resp);
        return produtoService.adicionarProduto("Igor Product",12,"Bom até hoje", "/img/produtoStarWars1.png","Star Wars").then(data => expect(data).toEqual(resp));        
    });

})


