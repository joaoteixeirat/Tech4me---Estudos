/*
 * O professor irá fazer a chamada e armazenar os nomes dos presentes em uma variável texto.
 * Após o último nome ser digitado, a relação de alunos será impressa no console, separando
 * cada aluno com vírgula. Faça duas versões do programa, com while e do..while.
 * O programa termina quando a entrada for vazia.
*/

const prompt = require("prompt-sync")();

//Versão com while:

var alunosPresentes = "";
var continuarChamada = true;

while(continuarChamada) {

  var nomeDoAluno = prompt("Digite o nome do aluno ou tecle enter para finalizar a chamada: ");

  if(nomeDoAluno == "") continuarChamada = false;
  else alunosPresentes += nomeDoAluno + ",";
}

console.log("Alunos presentes:",alunosPresentes.slice(0,-1));


//Versão com do..while:

var listaDeAlunos = "";
var nomeAluno = "";

do {

  nomeAluno = prompt("Digite o nome do aluno ou tecle enter para finalizar a chamada: ");

  if(nomeAluno !== "") listaDeAlunos += nomeAluno + ",";

} while (nomeAluno !== "");

console.log("Alunos presentes:",listaDeAlunos.slice(0,-1));
