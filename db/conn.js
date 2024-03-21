const mongoose = require('mongoose');

async function main() {
    try {
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.ncypmps.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
        console.log('Conectou ao MongoDB!');
    } catch(error) {
        console.log('Erro ao conectar no MongoDB', error);
    }
}

module.exports = main