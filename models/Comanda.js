const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome: String,
    preco: Number,
    tamanho: String,
    tipo: String,
});

const Comanda = mongoose.model('Comanda', Schema);

module.exports = Comanda;