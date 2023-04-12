/**
 * A escola de programação aumentou a correção de avaliações, permitindo lançar todas as notas da turma no sistema.
 * O sistema deverá exibir:
 *      a) um relatório de notas;
 *      b) O aluno com a maior nota;
 *      c) A quantidade de alunos abaixo da média 7.0.
*/

const prompt = require("prompt-sync")();

const avaliacoes = [

    {
        nome: "João",
        nota: 8
    },
    {
        nome: "Breno",
        nota: 7
    },
    {
        nome: "Lucas",
        nota: 6
    },
    {
        nome: "Eduardo",
        nota: 5
    },
    {
        nome: "Mônica",
        nota: 9
    }
];

function exibirRelatorioDeAvaliacoes(){

    console.clear();

    for(var i = 0; i < avaliacoes.length; i++){

        const avaliacaoAtual = avaliacoes[i];

        console.log("Nome do Aluno:",avaliacaoAtual.nome);
        console.log("Nota:",avaliacaoAtual.nota);
        console.log("\n");
    }

    prompt("Tecle enter para voltar ao menu...");
};

function calcularMaiorNota(){

    var avaliacaoComAMaiorNota;
    var maiorNota = 0;

    for(var i = 0; i < avaliacoes.length; i++){

        const avaliacaoAtual = avaliacoes[i];
        
        if(avaliacaoAtual.nota > maiorNota){

            maiorNota = avaliacaoAtual.nota;
            avaliacaoComAMaiorNota = avaliacaoAtual;
        } 
    }

    return avaliacaoComAMaiorNota;
};

function exibirMaiorNota(){

    console.clear();

    const avaliacaoComAMaiorNota = calcularMaiorNota();

    console.log("Nome do Aluno:",avaliacaoComAMaiorNota.nome);
    console.log("Nota:",avaliacaoComAMaiorNota.nota);
    console.log("\n");

    prompt("Tecle enter para voltar ao menu...");
};

function calcularAlunosAbaixoDaMedia(){

    var alunosAbaixoDaMedia = [];

    for(var i = 0; i < avaliacoes.length; i++){

        const avaliacaoAtual = avaliacoes[i];

        if(avaliacaoAtual.nota < 7) alunosAbaixoDaMedia.push(avaliacaoAtual);
    }

    return alunosAbaixoDaMedia;
};

function exibirAlunosAbaixoDaMedia(){

    console.clear();

    console.log("--- Alunos abaixo da média ---");

    const alunosAbaixoDaMedia = calcularAlunosAbaixoDaMedia();

    for(var i = 0; i < alunosAbaixoDaMedia.length; i++){

        const aluno = alunosAbaixoDaMedia[i];

        console.log("\nNome:",aluno.nome);
        console.log("Nota:",aluno.nota);
    }

    console.log("\nTotal de Alunos:",alunosAbaixoDaMedia.length);

    prompt("Tecle enter para voltar ao menu...");
};

function cadastrarAvaliacao(){

    console.clear();

    const nome = prompt("Digite o nome do aluno: ");
    const nota = prompt("Digite a nota do aluno: ");

    avaliacoes.push({
        nome: nome,
        nota: parseInt(nota)
    });

    console.log("\n");
    prompt("Avaliação salva com sucesso! Tecle enter...");

};

var opcaoEscolhida;

while(opcaoEscolhida != 5){

    console.clear();

    console.log("---Sistema de Gestão de Notas---\n");

    console.log("1- Cadastrar avaliação");
    console.log("2- Exibir relatório de notas");
    console.log("3- Exibir maior nota");
    console.log("4- Exibir alunos abaixo da média");
    console.log("5- Sair\n");

    opcaoEscolhida = parseInt(prompt("Digite a opção desejada: "));

    switch(opcaoEscolhida){

        case 1 : cadastrarAvaliacao();
            break;
        case 2 : exibirRelatorioDeAvaliacoes();
            break;
        case 3 : exibirMaiorNota();
            break;
        case 4 : exibirAlunosAbaixoDaMedia();
            break;
        case 5 : console.log("Encerrando sistema...");
            break;
    };
};