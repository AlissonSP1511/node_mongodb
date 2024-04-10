

const mongoose = require('mongoose');
const Produto = require('./Produto');
const Comanda = require('./Comanda');

const Schema = mongoose.Schema({
    Forma_pagamento: {
        type: String,
        required: true
    }
});

const Forma_pagamento = mongoose.model('Forma_pagamento', Schema);

module.exports = Forma_pagamento;