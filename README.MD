# API desenvolvida para o Desafio Técnico – Backend Ford Motor Company



# Sobre
  Api desenvolvida como parte do desafio tecnico proposto pelo IEL/BA , para o Programa de Bolsa Inova Talentos Bahia.
  A Api consiste em dois endpoints.que retornam dados extraído de um arquivo .json, contendo catalogos de filmes da Disney;

# Pre-Requisitos(para teste)
  * node js  versão :^16.16.0
  * insomnia-`https://insomnia.rest/download` ou postman-`https://www.postman.com/` para envio de corpo da requisiçao
  
  

# Utilizando
  clone o repositorio do gitHub e execute os comando npm ou yarn(caso tenha instaldo) no cmd,shell ou terminal  na raiz do projeto:
    
    -npm install 
    
    -yarn install  
    
  Após a instalação execute o **yarn start**  ou **npm start** no terminal; 
  
  pelo programa  Insomnia ou Postman use as seguintes URL:
  
    http://localhost:8000/filters
  
    http://localhost:8000/movies
    
  A primeira não necessita de corpo, a segunda necessita de um corpo no seguinte formato json:
  
   ## Exemplo
        {
      
         "filter":{
                    "genre":""
                    "years":""
                  }
         }
         
   Apenas o campo filter é obrigatorio,podendo ser deixado com chaves vazias,se nao for enviado retornara um erro. 
  
  
