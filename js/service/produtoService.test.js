
import {produtoService,listaProdutos} from "./produtoService.js";
import "isomorphic-fetch";


jest.mock('./produtoService.js');


describe("Service tests",() =>
{

    test('Test with get products (empty list)', async() =>{
        const produtos = [];
        const resp = {profile: produtos};
        listaProdutos.mockResolvedValue(resp);
        return produtoService.listaProdutos().then(data => expect(data).toEqual(resp));
    });

    test('Test with get products (1 element list)', function(){
        
    });

    test('Test with get products (more than one element list)', function(){
        
    });
})


