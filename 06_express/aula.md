# What is expressJS

## It's a minimalist framework

### Don't worry about set development pattern

## Works through middlewares

## Follow a pattern named Chain of Responsibility

## it Just cares about delivering the request and response, letting all the data flow as choice for the developer

### some scripts

const express = require("express")

const app = express()
const port = 3000 || process.env.PORT

app.use(express.json())

const log = (req,res,next) =>{
console.log(req.body);
console.log(`Data: ${Date.now()}`);
next()
}

app.use(log)

app.get("/", (req,res) =>{
res.send("<h1>Working </h1>")
})

app.get("/json",(req,res) =>{
console.log(req.body);
res.json({title:"Tarefa 1",done: true})
})

app.listen(port, () =>{
console.log("Servidor foi iniciado");
})
