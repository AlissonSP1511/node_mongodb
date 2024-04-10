const mongoose = require('mongoose')
const Cargo = require('./Cargo')

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    endereco: {
        type: String,
        required: true
    },
    sexo: {
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
    },
    Cargo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cargo'
    },
})

const Funcionario = mongoose.model('Funcionario', schema)

module.exports = Funcionario