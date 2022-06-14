import axios from 'axios';
class Produtos{
    static all(){
      // return axios.get('.././db/profile').then(resp => resp.data);
      
        let data= [];
        console.log("Data before sending is ")
        console.log(data);
        return axios.get('http://localhost:3000/profile'); 
      };
    }

   export default Produtos;