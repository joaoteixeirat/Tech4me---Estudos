const prompt = require("prompt-sync")();

const valorDoProduto = prompt("Digite o valor do produto: ");

const valorComoFloat = parseFloat(valorDoProduto);

const valorComDesconto = Math.trunc(valorComoFloat);

console.log("Você só pagará o valor de: R$",valorComDesconto);