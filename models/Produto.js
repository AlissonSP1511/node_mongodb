const mongoose = require('mongoose')
const { IngredienteSchema } = require('./Ingrediente')
const Tipo = require('./Tipo');
const TipoController = require('../controllers/TipoController');

// const schema = mongoose.Schema({
//     nome: {
//         type: String,
//         required: true,
//         minLength: 2,
//         maxLength: 100,
//         trim: true
//     },
//     preco: {
//         type: Number,
//         default: 0,
//         min: [0, 'Mais fácil'],
//         match: /^\d+(\.\d{1,2})?$/,
//     },
//     tamanho: String,
//     tipo: {
//         type: mongoose.Schema.Types.ObjectId, ref: 'tipo'
//     }
//     // tipo: {
//     //     type: String,
//     //     enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
//     // },
// })

// const Produto = mongoose.model('Produto', schema)

// module.exports = Produto

const schema = mongoose.Schema({
    nome: {
        type: String,
        required: true,
        minLength: 2,
        maxLength: 100,
        trim: true
    },
    preco: {
        type: Number,
        default: 0,
        min: [0, 'Mais fácil'],
        match: /^\d+(\.\d{1,2})?$/,
    },
    tamanho: String,
    TipoController: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Tipo'
    }
    // tipo: {
    //     type: String,
    //     enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
    // },
});

const Produto = mongoose.model('Produto', schema);
module.exports = Produto;