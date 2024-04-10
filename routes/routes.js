const express = require('express')
const CargoController = require('../controllers/CargoController')
const ClienteController = require('../controllers/ClienteController')
const ComandaController = require('../controllers/ComandaController')
const Forma_pagamentoController = require('../controllers/Forma_pagamentoController')
const FuncionarioController = require('../controllers/FuncionarioController')
const IngredienteController = require('../controllers/IngredienteController')
const Produto_comandaController = require('../controllers/Produto_comandaController')
const Produto_ingredienteController = require('../controllers/Produto_ingredienteController')
const ProdutoController = require('../controllers/ProdutoController')
const TipoController = require('../controllers/TipoController')
const router = express.Router()

router.get('/', function(req, res){
    res.json({})
})
// Cargos
router.get('/cargos', (req, res) => CargoController.getAll(req, res))
router.post('/cargos', (req, res) => CargoController.create(req, res))
router.get('/cargos/:id', (req, res) => CargoController.get(req, res))
router.put('/cargos/:id', (req, res) => CargoController.update(req, res))
router.delete('/cargos/:id', (req, res) => CargoController.delete(req, res))

// Clientes
router.get('/clientes', (req, res) => ClienteController.getAll(req, res))
router.post('/clientes', (req, res) => ClienteController.create(req, res))
router.get('/clientes/:id', (req, res) => ClienteController.get(req, res))
router.put('/clientes/:id', (req, res) => ClienteController.update(req, res))
router.delete('/clientes/:id', (req, res) => ClienteController.delete(req, res))

// Comandas
router.get('/comandas', (req, res) => ComandaController.getAll(req, res))
router.post('/comandas', (req, res) => ComandaController.create(req, res))
router.get('/comandas/:id', (req, res) => ComandaController.get(req, res))
router.put('/comandas/:id', (req, res) => ComandaController.update(req, res))
router.delete('/comandas/:id', (req, res) => ComandaController.delete(req, res))

// Formas_pagamento
router.get('/formas_pagamento', (req, res) => Forma_pagamentoController.getAll(req, res))
router.post('/formas_pagamento', (req, res) => Forma_pagamentoController.create(req, res))
router.get('/formas_pagamento/:id', (req, res) => Forma_pagamentoController.get(req, res))
router.put('/formas_pagamento/:id', (req, res) => Forma_pagamentoController.update(req, res))
router.delete('/formas_pagamento/:id', (req, res) => Forma_pagamentoController.delete(req, res))

// Funcionarios
router.get('/funcionarios', (req, res) => FuncionarioController.getAll(req, res))
router.post('/funcionarios', (req, res) => FuncionarioController.create(req, res))
router.get('/funcionarios/:id', (req, res) => FuncionarioController.get(req, res))
router.put('/funcionarios/:id', (req, res) => FuncionarioController.update(req, res))
router.delete('/funcionarios/:id', (req, res) => FuncionarioController.delete(req, res))

// Ingredientes
router.get('/ingredientes', (req, res) => IngredienteController.getAll(req, res))
router.post('/ingredientes', (req, res) => IngredienteController.create(req, res))
router.get('/ingredientes/:id', (req, res) => IngredienteController.get(req, res))
router.put('/ingredientes/:id', (req, res) => IngredienteController.update(req, res))
router.delete('/ingredientes/:id', (req, res) => IngredienteController.delete(req, res))

// Produtos_comanda
router.get('/produtos_comanda', (req, res) => Produto_comandaController.getAll(req, res))
router.post('/produtos_comanda', (req, res) => Produto_comandaController.create(req, res))
router.get('/produtos_comanda/:id', (req, res) => Produto_comandaController.get(req, res))
router.put('/produtos_comanda/:id', (req, res) => Produto_comandaController.update(req, res))
router.delete('/produtos_comanda/:id', (req, res) => Produto_comandaController.delete(req, res))

// Produtos_ingrediente
router.get('/produtos_ingrediente', (req, res) => Produto_ingredienteController.getAll(req, res))
router.post('/produtos_ingrediente', (req, res) => Produto_ingredienteController.create(req, res))
router.get('/produtos_ingrediente/:id', (req, res) => Produto_ingredienteController.get(req, res))
router.put('/produtos_ingrediente/:id', (req, res) => Produto_ingredienteController.update(req, res))
router.delete('/produtos_ingrediente/:id', (req, res) => Produto_ingredienteController.delete(req, res))

// Produtos
router.get('/produtos', (req, res) => ProdutoController.getAll(req, res))
router.post('/produtos', (req, res) => ProdutoController.create(req, res))
router.get('/produtos/:id', (req, res) => ProdutoController.get(req, res))
router.put('/produtos/:id', (req, res) => ProdutoController.update(req, res))
router.delete('/produtos/:id', (req, res) => ProdutoController.delete(req, res))

// Tipos
router.get('/tipos', (req, res) => TipoController.getAll(req, res))
router.post('/tipos', (req, res) => TipoController.create(req, res))
router.get('/tipos/:id', (req, res) => TipoController.get(req, res))
router.put('/tipos/:id', (req, res) => TipoController.update(req, res))
router.delete('/tipos/:id', (req, res) => TipoController.delete(req, res))




module.exports = router