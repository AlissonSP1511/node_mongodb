const mongoose = require('mongoose')
const Cliente = require('./Cliente')
const Forma_pagamento = require('./Forma_pagamento')

const schema = mongoose.Schema({
    mesa: {
        type: Number,
        required: true
    },
    funcionario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Funcionario'
    },
    Cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cliente'
    },
    Forma_pagamento: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Forma_pagamento'
    },
    Data_pagamento: {
        type: Date,
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    },
    Data: {
        type: {Date},
        required: true,
        set: (value) => {
            const [dia, mes, ano] = value.split('/')
            return `${ano}-${mes}-${dia}`
        }
    },

})

const Comanda = mongoose.model('Comanda', schema)

module.exports = Comanda