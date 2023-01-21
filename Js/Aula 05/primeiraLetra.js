const prompt = require("prompt-sync")();

const nomeDoCandidato = prompt("Digite o nome do candidato: ");

const primeirLetra = nomeDoCandidato.substring(0,1);

const vogais = "AaEeIiOoUu";

const comecaComVogal = vogais.indexOf(primeirLetra);

var diaDaEntrevista = "";

if( comecaComVogal != -1 ){

    diaDaEntrevista = "Segunda-Feira";
}
else{

    diaDaEntrevista = "Terça-Feira";
}

console.log("O candidato será entrevistado na",diaDaEntrevista);

























prompt("")
