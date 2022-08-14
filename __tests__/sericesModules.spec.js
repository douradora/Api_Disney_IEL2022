const listarFilmes = require('../src/services/filterSpecificField');
const database = require('../src/database/disney_movies.json');
const searchMovies = require('../src/services/seachForField');



test("testa retorno de objetos do banco",()=>{

    const lista = listarFilmes(database);
    
  expect(lista.length).toBe(database.length)
  

  

});




test("ver o numero correto de  objetos retorna",()=>{
    
   campos = Object.keys(database[0])

   campos.forEach(element => {
    const lista = listarFilmes(database,element);
    expect(lista.length).toBe(database.length)
   });
   
   
    
  
  

  

});
 

test("ver o numero correto de  objetos retorna",()=>{
    

const lista = listarFilmes(database,'genre');


expect(lista).toContain("Adventure")





});
 
test("consultar campos",()=>{



const movies = searchMovies(database,"movie_title","101 Dalmatians")


expect(movies.length !=0).toBe(true);





});
 


