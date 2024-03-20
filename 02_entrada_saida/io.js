const process = require("node:process")
process.stdout.write(`Seu nome: `)

process.stdin.on("data", keyboard =>{
  process.stdout.write(`Texto ${keyboard}`)
  process.exit(0)
})