const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nome: {
        type: String, 
        required: true,
        default: 'Teste'
    },
    cpf: {
        type: String,
        required: true
    },  
    telefone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: false
    }
  
})

const Cliente = mongoose.model('Cliente', schema)

module.exports = Cliente