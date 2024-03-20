const fs = require("node:fs")

fs.writeFile("amar.txt","Salve", err =>{
  console.log(err);
}) // sobrescreve arquivo caso já exista

fs.appendFile("fe.txt","\nSalve", err =>{
  console.log(err);
}) // adiciona o conteúdo novo 

fs.rename("fe.txt","fe.txt", err => console.log(err))

fs.unlink("amar.txt", err => console.log(err))