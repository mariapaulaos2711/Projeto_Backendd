const express = require("express")
const router = express.Router()

const Cliente = require("./controllers/cliente")
const Pedidos = require("./controllers/pedido")
const Produtos = require("./controllers/produtos")
const Itens = require("./controllers/itens")

const rotaInicial = (req, res) => {
    res.json("Pedidos MVC respondendo")
}

router.get('/', rotaInicial)

router.post('/clientes', Cliente.criar)
router.get('/clientes', Cliente.listar)
router.put('/clientes/:id', Cliente.alterar)
router.delete('/clientes/:id', Cliente.excluir)

router.post('/pedidos', Pedidos.criar)
router.get('/pedidos', Pedidos.listar)
router.put('/pedidos/:id', Pedidos.alterar)
router.delete('/pedidos/:id', Pedidos.excluir)

router.post('/produtos', Produtos.criar)
router.get('/produtos', Produtos.listar)
router.put('/produtos/:id', Produtos.alterar)
router.delete('/produtos/:id', Produtos.excluir)

router.post('/itens', Itens.criar)
router.get('/itens', Itens.listar)
router.put('/itens/:id', Itens.alterar)
router.delete('/itens/:id', Itens.excluir)

module.exports = router