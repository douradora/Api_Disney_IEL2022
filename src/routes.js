


const Router = require("express")


const route = Router();


route.get('/filters',(req,res)=>{
    res.send({message:"retornou filtro"})
})
route.get('/movies',(req,res)=>{
    res.send({message:"retornou movies"})
})


module.exports=route;