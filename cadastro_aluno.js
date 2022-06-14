const {Client} = require('pg');

const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
    database: 'crud_biblioteca'
};


function inserirAluno(aluno, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "INSERT INTO tabela_aluno(matricula, nome_aluno, curso) VALUES ($1, $2, $3) RETURNING *";
    const values = [aluno.matricula, aluno.nome_aluno, aluno.curso];

    cliente.query(sql, values, 
        function (err, res){
            callback(err, res.rows[0]);
            cliente.end();
        })

}


function listarAluno(callback) {
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_aluno";
    cliente.query(sql, 
        function (err, res) {
            if(err) {
                callback(err.message, undefined);
            }
            else {
                let aluno = res.rows;
                callback(undefined, aluno);     
            }
            cliente.end();
        }
    )    
}


function deletarAluno(matricula, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "DELETE FROM tabela_aluno WHERE matricula=$1 RETURNING *"
    const values = [matricula];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let aluno = res.rows[0];
            callback(undefined, aluno);
        }
        else {
            const error = "Aluno nao encontrado";
            callback(error, undefined);
        }

        cliente.end();        
    })
}


function atualizarAluno(aluno, callback) {
    const cliente = new Client(conexao);
    cliente.connect();

    const sql = "UPDATE tabela_aluno SET matricula=$1, nome_aluno=$2, curso=$3 WHERE matricula=$1 RETURNING *"
    const values = [aluno.matricula, aluno.nome_aluno, aluno.curso];

    cliente.query(sql, values, function(err, res) {
        if(err) {
            callback(err.message, undefined);                
        }
        else if (res.rows && res.rows.length > 0) {
            let aluno = res.rows[0];
            callback(undefined, aluno);
        }
        else {
            const error = "Aluno nao encontrado";
            callback(error, undefined);
        }

        cliente.end();        
    })
}


function buscarAluno(matricula, callback){
    const cliente = new Client(conexao);
    cliente.connect();
    
    const sql = "SELECT * FROM tabela_aluno WHERE matricula=$1";
    const values = [matricula];

    cliente.query(sql, values,
        function (err, res) {
            if(err) {
                callback(err.message, undefined);                
            }
            else if (res.rows && res.rows.length > 0) {
                let aluno = res.rows[0];
                callback(undefined, aluno);
            }
            else {
                const error = "Aluno nao encontrado";
                callback(error, undefined);
            }

            cliente.end();
        }
    )    
}


module.exports = {
    listarAluno, inserirAluno, deletarAluno, atualizarAluno, buscarAluno
}