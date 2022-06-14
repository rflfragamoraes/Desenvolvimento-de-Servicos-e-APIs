const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'crud_biblioteca'
};

function inserirLivro(livro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO tabela_livro(codigo, nome_livro, autor, quantidade) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [livro.codigo, livro.nome_livro, livro.autor, livro.quantidade];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })
}


function listarLivro(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_livro";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let livros = res.rows;
                callback(undefined, livros);     
            }
            cliente.end();
        }
    )    
}


function deletarLivro(codigo, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM tabela_livro WHERE codigo=$1 RETURNING *"
    const values = [codigo];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let livro = res.rows[0];
            callback(undefined, livro);
        }
        else {
            const error = "Aluno nao encontrado";
            callback(error, undefined);
        }

        cliente.end();        
    })
}


function atualizarLivro(livro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE tabela_livro SET codigo=$1, nome_livro=$2, autor=$3, quantidade=$4  WHERE codigo=$1 RETURNING *"
    const values = [livro.codigo, livro.nome_livro, livro.autor, livro.quantidade];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let livro = res.rows[0];
            callback(undefined, livro);
        }
        else {
            const error = "Livro nao encontrado";
            callback(error, undefined);
        }

        cliente.end();        
    })
}


function buscarLivro(codigo, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_livro WHERE codigo=$1";
    const values = [codigo];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let livro = res.rows[0];
                callback(undefined, livro);
            }
            else {
                const error = "Livro nao encontrado";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}


module.exports = {
    listarLivro, inserirLivro, deletarLivro, atualizarLivro, buscarLivro
}