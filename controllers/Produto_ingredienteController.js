



const Produto_ingrediente = require('../models/Produto_ingrediente');
const Produto_ingredienteController = {
    getAll:async(req,res) =>{
        res.json( await Produto_ingrediente.find())
    },
    get:async(req,res) =>{
        try {
            res.json( await Produto_ingrediente.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
        // res.json( await Produto_ingrediente.find(req.params.id))
    },
    create:async(req,res) =>{
        try {
            res.json( await Produto_ingrediente.create(req.body))
        } catch (error) {
            res.status(400).json(error) // 404 not found (error)
        }
    },
    update:async(req,res) =>{
        try {
            res.json( await Produto_ingrediente.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    },
    delete:async(req,res) =>{
        try {
            res.json( await Produto_ingrediente.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    }
}

module.exports = Produto_ingredienteController