
//Input de Sexo - "masc" ou "fem"
var sexo = "masc";

//Input de Idade
var idade = 18;

var emancipado_fem = sexo == "fem" && idade >= 21;
var emancipado_masc = sexo == "masc" && idade >= 18;

const sou_emancipado = emancipado_fem || emancipado_masc;

console.log("Sou emancipado?", sou_emancipado);
