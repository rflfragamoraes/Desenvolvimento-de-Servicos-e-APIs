const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'crud_biblioteca'
};


function consultaAluno(nome_aluno, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_aluno WHERE nome_aluno=$1";
    const values = [nome_aluno];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let aluno1 = nome_aluno;
                callback(undefined, aluno1);
            }
            else {
                const error = "Aluno nao encontrado";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}

function consultaLivro(nome_livro, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_livro WHERE nome_livro=$1";
    const values = [nome_livro];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let aluno2 = nome_livro;
                callback(undefined, aluno2);
            }
            else {
                const error = "Livro nao encontrado";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}

function retirarLivro(alunoLivro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO tabela_retirada (nome_aluno, nome_livro, data_retirada, data_entrega) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [alunoLivro.nome_aluno, alunoLivro.nome_livro, alunoLivro.data_retirada, alunoLivro.data_entrega];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })

}

function entregarLivro(nome_aluno, nome_livro, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM tabela_retirada WHERE nome_aluno=$1 AND nome_livro=$2 RETURNING *"
    const values = [nome_aluno, nome_livro];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let aluno = res.rows[0];
            callback(undefined, aluno);
        }
        else {
            const error = "Aluno ou Livro nao registrado...";
            callback(error, undefined);
        }

        cliente.end();        
    })
}

function situacaoLivro(nome_livro, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_retirada WHERE nome_livro=$1";
    const values = [nome_livro];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                
                callback(undefined, nome_livro);
            }
            else {
                const error = "O livro " +nome_livro+ " esta disponivel para retirada";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}


module.exports = {
    consultaAluno, consultaLivro, retirarLivro, entregarLivro, situacaoLivro
}