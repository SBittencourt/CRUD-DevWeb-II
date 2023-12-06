// Tabela de produtos

(async () =>{
    const database = require('./db.js');
    const Produto = require('./produto.js');

    const resultado = await database.sync();

    //Operação de criação (CREATE)

    const resultadoCreate = await Produto.create({

        nome: 'Mouse',
        preco: 10,
        descricao: 'Um mouse gamer rgb mto top'
    })

    const resultadoCreate1 = await Produto.create({

        nome: 'Teclado',
        preco: 20,
        descricao: 'Um teclado gamer rgb mto top da famosa marca shucha'
    })

    const resultadoCreate2 = await Produto.create({

        nome: 'Notebook',
        preco: 30,
        descricao: 'Notebook da barbie que roda os jogos mais pesadões tipo aquele do "Andy, você é comida'
    })

    //Operação de ler (READ)

    const produtos = await Produto.findByPk(3)
    console.log(produtos);

    //Operação de alteração (UPDATE)

    const produto = await Produto.findByPk(2);

    produto.nome = "Teclado da shucha";

    const resultadoSave = await produto.save();
    console.log(resultadoSave);

    //Operação de deletar (DELETE)

    await Produto.findByPk(1);
    produto.destroy();

})();

// Tabela de clientes

(async () =>{
    const database = require('./db');
    const Cliente = require('./cliente');

    const resultado = await database.sync();

    //Operação de criação (CREATE)

    const resultadoCreate = await Cliente.create({
        nome: 'Hide nomnom',
        descricao: 'Entidade maligna do jogo Andy, você é comida'
    })

    const resultadoCreate1 = await Cliente.create({
        nome: 'Akai Shucha',
        descricao: 'Famosa cantora Shucha'
    })

    const resultadoCreate2 = await Cliente.create({
        nome: 'Mesa voadora',
        descricao: 'Mesa que curte voar em telhados'
    })

    //Operação de ler (READ)

    const clientes = await Cliente.findByPk(3)
    console.log(clientes);

    //Operação de alteração (UPDATE)

    const cliente = await Cliente.findByPk(1);

    cliente.nome = "NOMNOMNOMNOM";

    const resultadoSave = await cliente.save();
    console.log(resultadoSave);

    //Operação de deletar (DELETE)

    await Cliente.findByPk(3);
    cliente.destroy();

})();