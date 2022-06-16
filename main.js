const cadastroAluno = require('./cadastro_aluno.js')
const cadastroLivro = require('./cadastro_livro.js')
const retiradaLivro = require('./retirada_livro.js')


//******************************************************************************************************
//Cadastro Aluno
//******************************************************************************************************


/*cadastroAluno.inserirAluno({matricula: 333, nome_aluno: "Debora", curso:"ADS"},
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
    });*/


/*cadastroAluno.listarAluno(
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
);*/


/*cadastroAluno.deletarAluno(555, function(erro, aluno) {
    console.log("Aluno deletado (2): ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(aluno);
    }
});*/


/*cadastroAluno.atualizarAluno({matricula: 111, nome_aluno: "Rafael Moraes", curso: "ADS"}, 
    function(erro, aluno) {
        console.log("Atualizar Aluno(001): ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(aluno);
        }
});*/

/*cadastroAluno.buscarAluno(matricula = 111, 
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
    });*/


/*cadastroLivro.listarLivro(
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
);*/


/*cadastroLivro.deletarLivro(4444, function(erro, livro) {
    console.log("Livro deletado com sucesso... ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(livro);
    }
});*/


/*cadastroLivro.atualizarLivro({ codigo:8888, nome_livro: "Perdido no espaco", autor: "Carlos Miguel", quantidade: 6}, 
    function(erro, livro) {
        console.log("Atualizar Livro: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(livro);
        }
});*/


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

// funcao para consultar aluno, consular livro e se existente fazer o cadastro da retirada
/*retiradaLivro.consultaAluno(nome_aluno = "Debora", 
    function(erro, item1) {
        console.log("Aluno: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log(item1);    

            retiradaLivro.consultaLivro(nome_livro = "H", 
            function(erro, item2) {
                console.log("Livro: ");
                if(erro) {
                    console.log("Erro: "+erro);
                }
                else {
                    console.log(item2);  

                    retiradaLivro.retirarLivro({nome_aluno: item1, nome_livro: item2, data_retirada: "16/06", data_entrega: "21/06"},
                    function(err, retirar) {
                        console.log("Resgistando retirada...")
                        if(err) {
                            console.log("Aconteceu algum erro... tente novamente");
                            console.log(err);
                        }
                        else {
                            console.log("Livro retirado com sucesso...");
                            console.log(retirar);
                        }
                    });       

            }
        });        

    }
});*/



/*retiradaLivro.entregarLivro("Debora", "H", function(erro, entregar) {
    console.log("Entregando o Livro... ");
    if(erro) {
        console.log("Erro: "+erro);
    }
    else {
        console.log(entregar);
    }
});*/


/*retiradaLivro.situacaoLivro("H2", 
    function(erro, livro) {
        console.log("Consultando Livro: ");
        if(erro) {
            console.log("Erro: "+erro);
        }
        else {
            console.log("Este livro " +livro+ " nao esta disponivel para retirada");
        }
});*/