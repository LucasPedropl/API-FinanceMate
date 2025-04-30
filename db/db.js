const Sequelize = require('sequelize');

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'FinanceMate.sqlite'
})

try{
    db.authenticate()
    console.log('Conexão com o banco de dados foi bem sucedida.')
}catch(erro){
    console.log('Houve uma falha ao conectar com o banco de dados. ', erro)
}

module.exports = db