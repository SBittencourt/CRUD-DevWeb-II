const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        AllowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        AllowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
})

  try {
    Produto.sync({ force: true });
    console.log('Tabela de produto criada com sucesso!');
  } catch(error) {
    console.error('Erro ao criar tabela de produto:', error);
  }

module.exports = Produto;