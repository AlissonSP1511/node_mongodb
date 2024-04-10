

const mongoose = require('mongoose');
const Produto = require('./Produto');

const Schema = mongoose.Schema({
    Produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    },
    Ingrediente: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingrediente'
    }
});

const Produto_ingrediente = mongoose.model('Produto_ingrediente', Schema);

module.exports = Produto_ingrediente;