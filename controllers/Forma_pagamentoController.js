



const Forma_pagamento = require('../models/Forma_pagamento');
const Forma_pagamentoController = {
    getAll:async(req,res) =>{
        res.json( await Forma_pagamento.find())
    },
    get:async(req,res) =>{
        try {
            res.json( await Forma_pagamento.findById(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
        // res.json( await Forma_pagamento.find(req.params.id))
    },
    create:async(req,res) =>{
        try {
            res.json( await Forma_pagamento.create(req.body))
        } catch (error) {
            res.status(400).json(error) // 404 not found (error)
        }
    },
    update:async(req,res) =>{
        try {
            res.json( await Forma_pagamento.findByIdAndUpdate(req.params.id, req.body))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    },
    delete:async(req,res) =>{
        try {
            res.json( await Forma_pagamento.findByIdAndDelete(req.params.id))
        } catch (error) {
            res.status(404).json({error:"nao encontrado"}) // 404 not found (error)
        }
    }
}

module.exports = Forma_pagamentoController