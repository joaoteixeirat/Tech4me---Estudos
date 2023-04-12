/**
 * O professor irá fazer a chamada e armazenar cada nome
 * em uma posição do array de alunos. O programa irá ler os nomes do console,
 * e ao receber um valor vazio, a entrada termina.
*/

const prompt = require("prompt-sync")();

var alunosPresentes = [];
var finalizarChamada = false;

while(!finalizarChamada){

    var aluno = prompt("Digite o nome do aluno ou tecle enter para finalizar: ");

    if(aluno == "") finalizarChamada = true;
    else alunosPresentes.push(aluno);
}

console.log("\nTotal de alunos presentes:",alunosPresentes.length);
console.log("Nomes:",alunosPresentes);