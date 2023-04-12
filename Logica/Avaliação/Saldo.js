/**
 * A agência bancária possui duas listas: Clientes e valor do saldo em conta corrente.
 * O operador do caixa vai perguntar o nome do cliente e o sistema irá informar o saldo da sua conta.
 * O nome digitado não diferencia maiúsculas e minúsculas. O valor é ponto flutuante.
 * A lista deve possuir saldos zerados e negativos
*/

const prompt = require("prompt-sync")();

const clientes = ["Tony Stark","Bruce Wayne","Joe","Ellie","Barry Allen","Tio patinhas","Zepa","Fisiquela","Annie","Walter Kovacs","Charmosa","José","Neymar","Luffy"];
const saldos = [3,0,2469.00,-100,10,239999999.999,-20000.00,4359.56,844500.00,73,0.50,-150,0,200];

const listaDeClientesEmMaiusculo = [];

for(var i = 0; i < clientes.length; i++){

    const clienteEmMaiusculo = clientes[i].toUpperCase();

    listaDeClientesEmMaiusculo.push(clienteEmMaiusculo);
}

const cliente = prompt("Digite o nome do cliente para consultar o saldo: ");

const clienteMaiusculo = cliente.toUpperCase();

const posicaoDoCliente = listaDeClientesEmMaiusculo.indexOf(clienteMaiusculo);

if(posicaoDoCliente !== -1){

    const saldoDoCliente = saldos[posicaoDoCliente];
    
    console.log("Saldo:",saldoDoCliente);
}
else{

    console.log("Cliente não encontrado.");
}
