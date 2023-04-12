/*
 * O totem da lanchonete irá solicitar o nome do sanduíche.
 * Depois disso, o cliente pode digitar até cinco acompanhamentos por R$ 2,00 cada.
 * Ao final será exibido o pedido completo e o valor a pagar.
 * Se o cliente digitar “concluir”, o programa não pede mais acompanhamentos.
*/

const prompt = require("prompt-sync")();

console.log("-----------------------------")
console.log("       SANDUBA DO ZEPA       ")
console.log("-----------------------------")

console.log("\nOs sanduíches custam R$5.");

const nomeDoSanduiche = prompt("Digite o sanduíche desejado: ");

if(nomeDoSanduiche != ""){
    
    console.log("\nVocê pode pedir até 5 acompanhamentos por R$2 cada!\n");

    var acompanhamentos = "";
    var totalAPagar = 5;

    for(var i = 5;i > 0; i--){
        
        const acompanhamentoAtual = prompt("Digite o acompanhamento ou 'concluir' para finalizar: ");

        const finalizarPedido = acompanhamentoAtual.toLowerCase() == "concluir" || acompanhamentoAtual == "";

        if(finalizarPedido) break;

        acompanhamentos += acompanhamentoAtual + "|";

        totalAPagar += 2.00;
    };

    if(acompanhamentos == "") acompanhamentos = "Nenhum ";
    
    console.log("\nVocê pediu:",nomeDoSanduiche);
    console.log("Acompanhamentos:",acompanhamentos.slice(0,-1));
    console.log("Total a pagar: R$",totalAPagar);
}
else{

    console.log("Até mais!");
};


