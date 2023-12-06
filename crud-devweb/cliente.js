const Sequelize = require('sequelize');
const database = require('./db');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: Sequelize.STRING
})

  try {
    Cliente.sync({ force: true });
    console.log('Tabela de cliente criada com sucesso!');
  } catch(error) {
    console.error('Erro ao criar tabela de cliente:', error);
  }

module.exports = Cliente;