
function calcularValorDeCompra(codigoDaAcao,valorDaAcao,quantidadeDeAcoes){

    const totalDaCompra = valorDaAcao * quantidadeDeAcoes;

    console.log("A compra de",quantidadeDeAcoes,"ações de",codigoDaAcao,"custará R$",totalDaCompra);

    return totalDaCompra;
};

calcularValorDeCompra("BOVA11",25.50,120);
calcularValorDeCompra("ITSA4",14.50,85);
calcularValorDeCompra("OIBR3",1.20,30);
