
import { listarProdutos } from './db.js'
import express from 'express'

const port = 3000
// instancia o servidor
const server = express()

// Métodos HTTP

// método get: localhost:3000/
// req = objeto requisição recebida pelo get()
// res = objeto resposta a ser enviada
server.get('/', async(req, res) => {
    res.status(200).send('<h1>Bem vindo à API Rest</h1>')
})

// rotas, routes ou endpoints => 'links' (ou url) de acesso à API Rest
// método get: localhost:3000/produtos
server.get('/produtos', async(req, res)=> {
    const produtos = await listarProdutos()
    res.status(200).json(produtos)
})


// inicia a execução do servidor na porta 3000
server.listen(port, () => {
    console.log(`Servidor executando na porta ${port}`)
})

