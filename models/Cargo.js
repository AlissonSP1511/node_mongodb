

const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    nome: {
        type: String,
        required: true
    }
});

const Cargo = mongoose.model('Cargo', Schema);

module.exports = Cargo;