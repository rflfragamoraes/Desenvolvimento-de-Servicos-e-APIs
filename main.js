const cadastroAluno = require('./cadastro_aluno.js')
const cadastroLivro = require('./cadastro_livro.js')
const retiradaLivro = require('./retirada_livro.js')


//******************************************************************************************************
//Cadastro Aluno
//******************************************************************************************************


/*cadastroAluno.inserirAluno({matricula: 777, nome_aluno: "Joao", curso:"Medicina"},
    function(err, alunoInserido) {
        console.log("INSERINDO Aluno...")
        if(err) {
            console.log("Aconteceu algum erro... tente novamente");
            console.log(err);
        }
        else {
            console.log("Aluno inserido: ");
            console.log(alunoInserido);
        }
    });




cadastroAluno.listarAluno(
    function(err, aluno) {
        console.log("Listar: ");
        if(err) {
            console.log("Aconteceu algum erro... tente novamente");
            console.log(err);
        }
        else {
            console.log(aluno);

        }
    }
);


cadastroAluno.deletarAluno(555, function(erro, aluno) {
    console.log("Aluno deletado (2): ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(aluno);
    }
});


cadastroAluno.atualizarAluno({matricula: 111, nome_aluno: "Rafael Moraes", curso: "Redes"}, 
    function(erro, aluno) {
        console.log("Atualizar Aluno(001): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(aluno);
        }
});


cadastroAluno.buscarAluno(matricula = 111, 
    function(erro, aluno) {
        console.log("BuscarAluno: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(aluno);
        }
});*/



//******************************************************************************************************
//Cadastro Livro
//******************************************************************************************************


/*cadastroLivro.inserirLivro({codigo: 8888, nome_livro: "Geagrafia do Amanha", autor:"Pedro", quantidade: 5},
    function(err, livroInserido) {
        console.log("INSERINDO Livro...")
        if(err) {
            console.log("Aconteceu algum erro... tente novamente");
            console.log(err);
        }
        else {
            console.log("Livro inserido: ");
            console.log(livroInserido);
        }
    });


cadastroLivro.listarLivro(
    function(err, livros) {
        console.log("Listar Livro: ");
        if(err) {
            console.log("Aconteceu algum erro... tente novamente");
            console.log(err);
        }
        else {
            console.log(livros);

        }
    }
);


cadastroLivro.deletarLivro(4444, function(erro, livro) {
    console.log("Livro deletado com sucesso... ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(livro);
    }
});*/


cadastroLivro.atualizarLivro({ codigo:8888, nome_livro: "Perdido no espaco", autor: "Carlos Miguel", quantidade: 6}, 
    function(erro, livro) {
        console.log("Atualizar Livro: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(livro);
        }
});


/*cadastroLivro.buscarLivro(8888, 
    function(erro, livro) {
        console.log("Buscar Livro: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(livro);
        }
});*/



//******************************************************************************************************
//Retirada Livro
//******************************************************************************************************

retiradaLivro.retirarLivro();

retiradaLivro.entregarLivro();

retiradaLivro.situacaoLivro();