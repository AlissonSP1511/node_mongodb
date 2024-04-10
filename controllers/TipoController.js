



const Tipo = require('../models/Tipo');
const TipoController = {
    getAll:async(req,res) =>{
        res.json( await Tipo.find())
    },
    get:async(req,res) =>{
        try {
            res.json( await Tipo.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
        // res.json( await Tipo.find(req.params.id))
    },
    create:async(req,res) =>{
        try {
            res.json( await Tipo.create(req.body))
        } catch (error) {
            res.status(400).json(error) // 404 not found (error)
        }
    },
    update:async(req,res) =>{
        try {
            res.json( await Tipo.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    },
    delete:async(req,res) =>{
        try {
            res.json( await Tipo.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    }
}

module.exports = TipoController