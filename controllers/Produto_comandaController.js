



const Produto_comanda = require('../models/Produto_comanda');
const Produto_comandaController = {
    getAll:async(req,res) =>{
        res.json( await Produto_comanda.find())
    },
    get:async(req,res) =>{
        try {
            res.json( await Produto_comanda.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
        // res.json( await Produto_comanda.find(req.params.id))
    },
    create:async(req,res) =>{
        try {
            res.json( await Produto_comanda.create(req.body))
        } catch (error) {
            res.status(400).json(error) // 404 not found (error)
        }
    },
    update:async(req,res) =>{
        try {
            res.json( await Produto_comanda.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    },
    delete:async(req,res) =>{
        try {
            res.json( await Produto_comanda.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    }
}

module.exports = Produto_comandaController