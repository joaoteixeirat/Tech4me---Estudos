/**
 * A escola de programação precisa corrigir a avaliação de 5 alunos.
 * As avaliações são objetos e a média de cada um deve ser calculada em uma função.
 * Cada objeto tem propriedades nome, módulo, nota_4 e nota_6.
 * O programa exibe, para cada aluno, se foi “aprovado” ou “reprovado”.
*/

const prompt = require("prompt-sync")();

const avaliacoes = [

    {
        nome: "João",
        modulo: "Matemática",
        nota_4: 5,
        nota_6: 9
    },
    {
        nome: "Breno",
        modulo: "Português",
        nota_4: 8,
        nota_6: 7
    },
    {
        nome: "Lucas",
        modulo: "História",
        nota_4: 4,
        nota_6: 9
    },
    {
        nome: "Eduardo",
        modulo: "Matemática",
        nota_4: 5,
        nota_6: 5
    },
    {
        nome: "Mônica",
        modulo: "Geografia",
        nota_4: 10,
        nota_6: 9
    }
];

function calculaMediaDoAluno(avaliacao){

    const nota_4 = avaliacao.nota_4;
    const nota_6 = avaliacao.nota_6;

    return (nota_4 + nota_6) / 2;
};

const mediaMinimaParaAprovacao = 7;

for(var i = 0; i < avaliacoes.length; i++){

    const avaliacaoAtual = avaliacoes[i];

    const mediaDoAluno = calculaMediaDoAluno(avaliacaoAtual);

    var situacao = "";

    if(mediaDoAluno >= mediaMinimaParaAprovacao) situacao = "Aprovado";
    else situacao = "Reprovado";

    console.log("\nNome do Aluno:",avaliacaoAtual.nome);
    console.log("Média:",mediaDoAluno);
    console.log("Situação:",situacao);
};