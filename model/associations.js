const Usuario = require('./modelUsuario/model');
const Banco = require('./modelBanco/model');
const Cartao = require('./modelBanco/modelCartao');
const Categoria = require('./modelCategoria/model');
const Receita = require('./modelReceita/model');
const Despesa = require('./modelDespesa/model');

// Usuário e Banco
Usuario.hasMany(Banco, { foreignKey: 'usuarioId', as: 'bancos' });
Banco.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

// Usuário e Cartão
Usuario.hasMany(Cartao, { foreignKey: 'usuarioId', as: 'cartoes' });
Cartao.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

// Usuário e Categoria
Usuario.hasMany(Categoria, { foreignKey: 'usuarioId', as: 'categorias' });
Categoria.belongsTo(Usuario, { foreignKey: 'usuarioId', as: 'usuario' });

// Categoria e Receita
Categoria.hasMany(Receita, { foreignKey: 'categoriaId', as: 'receitas' });
Receita.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

// Categoria e Despesa
Categoria.hasMany(Despesa, { foreignKey: 'categoriaId', as: 'despesas' });
Despesa.belongsTo(Categoria, { foreignKey: 'categoriaId', as: 'categoria' });

module.exports = { Usuario, Banco, Cartao, Categoria, Receita, Despesa };
