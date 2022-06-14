const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'crud_biblioteca'
};

function retirarLivro() {}

function entregarLivro() {}

function situacaoLivro() {}


module.exports = {
    retirarLivro, entregarLivro, situacaoLivro
}