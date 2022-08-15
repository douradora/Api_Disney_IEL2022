const express = require("express");
const cors =require("cors")
const route= require("./routes");

const app = express();

const PORT= 8000;

app.use(cors());
app.use(express.json());
app.use(route);
app.use((err,req,res,next)=>{
       if(err.name=="SyntaxError"){
            return res.json({
                status:"requisição mal formatada",
                message:"Certifique-se que os dados estão formatados de forma correta"
            })
       }
    
    return res.json({
        status:"Error",
        message:err.message,
        typo:err.name
        
    })
})
app.listen(PORT,()=>console.log(`server is running http://localhost:${PORT}`));

module.exports =app;