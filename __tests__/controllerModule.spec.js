const request = require("supertest");
const app =require("../src/index");
 


 it("deve ser capaz de retornar apenas objetos com os dados solicitados",async ()=>{
  const reponse =  await request(app).get("/movies").send({filter:{
            years:"2003,2005",
           
  }});

  const dados =reponse.body['movies'].find(element => {
           const data = new  Date(element.release_date).getFullYear();
            return data != 2003 & data !=2005 
            
            
  });

  console.log(dados)
  expect(dados).toBe(undefined)
  
 })




 it("deve ser capaz de retornar apenas o filtro solicitado ",async ()=>{
  const reponse =  await request(app).get("/movies").send({filter:{
            years:"2004,2005",
            genre:"Drama"
  }});

  const dados =reponse.body['movies'].find(element => {
           const data = new  Date(element.release_date).getFullYear();
            return data != 2004 & data !=2005 &  element.genre!= "Drama" 
            
            
  });


  expect(dados).toBe(undefined)
  
 })