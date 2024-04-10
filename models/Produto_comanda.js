

const mongoose = require('mongoose');
const Produto = require('./Produto');

const Schema = mongoose.Schema({
    Produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto'
    },
    Comanda: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comanda'
    },
    quantidade: {
        type: Number,
        required: true
    }
});

const Produto_comanda = mongoose.model('Produto_comanda', Schema);

module.exports = Produto_comanda;