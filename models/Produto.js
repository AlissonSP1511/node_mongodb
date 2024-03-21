const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
});

const Produto = mongoose.model('Produto', Schema);

module.exports = Produto;