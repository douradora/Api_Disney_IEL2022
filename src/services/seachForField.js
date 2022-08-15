const { response } = require("express");

const filterFieldService = require("./filterSpecificField")

/**
 * funcao recebe os os dados e retorna 
 * @param  Data objeto para ser filtrado  
 * @param  fieldsForFilter objeto com campo e valores serem filtrado
 * @return um novo objeto ja filtrado 
 * 
 */
module.exports = function searchForfield(DataBase, field,values) {
    if(!field || !values ){
       return DataBase;
    }
    const splitValues = values.split(',');
  
    if(field==="release_date"){
      const resultDate = DataBase.filter(objetos=>{
        return splitValues.find((value)=>{
         const data =new Date(objetos["release_date"]).getFullYear();
           
          return value==data})
      })
       
        return resultDate;
  
    }
  
  
   const result = DataBase.filter(objetos=>{
          return splitValues.find((value)=>value==objetos[field])
        })
  
        return result;
  
  }