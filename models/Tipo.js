

const mongoose = require('mongoose');

// const Schema = mongoose.Schema({
//     tipo: {
//             type: String,
//             enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
//         },
// });

// const Tipo = mongoose.model('Tipo', Schema);

// module.exports = Tipo;

const Schema = mongoose.Schema({
    tipo: {
        type: String,
        enum: ["Bebidas", "Pizzas", "Massas", "Sobremesas"]
    }
});

const Tipo = mongoose.model('Tipo', Schema);
module.exports = Tipo;