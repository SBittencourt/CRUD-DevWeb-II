const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('produto', {
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
    descricao: Sequelize.STRING
})

  try {
    Produto.sync({ force: true });
    console.log('Tabela de cliente criada com sucesso!');
  } catch(error) {
    console.error('Erro ao criar tabela de cliente:', error);
  }

module.exports = Produto;