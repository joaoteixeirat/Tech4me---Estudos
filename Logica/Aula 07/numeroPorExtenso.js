/* 
    Exercício:
    Criar uma função que escreva por extenso
    o número que for passado como parâmetro.

    OBS: A função só receberá números de 20 até o 99.
*/

function escreveNumeroPorExtenso(numero){

    const numeroEmString = numero + "";

    const dezena = numeroEmString.substring(0,1);

    const unidade = numeroEmString.substring(1,2);

    var dezenaEmExtenso;
    var unidadeEmExtenso;

    switch(dezena){

        case "2": {
            dezenaEmExtenso = "Vinte"
            break;
        };
        case "3": {
            dezenaEmExtenso = "Trinta"
            break;
        };
        case "4": {
            dezenaEmExtenso = "Quarenta"
            break;
        };
        case "5": {
            dezenaEmExtenso = "Cinquenta"
            break;
        };
        case "6": {
            dezenaEmExtenso = "Sescenta"
            break;
        };
        case "7": {
            dezenaEmExtenso = "Setenta"
            break;
        };
        case "8": {
            dezenaEmExtenso = "Oitenta"
            break;
        };
        case "9": {
            dezenaEmExtenso = "Noventa"
            break;
        };
    };

    switch(unidade){

        case "1":{

            unidadeEmExtenso = "um";
            break;
        };
        case "2":{

            unidadeEmExtenso = "dois";
            break;
        };
        case "3":{

            unidadeEmExtenso = "três";
            break;
        };
        case "4":{

            unidadeEmExtenso = "quatro";
            break;
        };
        case "5":{

            unidadeEmExtenso = "cinco";
            break;
        };
        case "6":{

            unidadeEmExtenso = "seis";
            break;
        };
        case "7":{

            unidadeEmExtenso = "sete";
            break;
        };
        case "8":{

            unidadeEmExtenso = "oito";
            break;
        };
        case "9":{

            unidadeEmExtenso = "nove";
            break;
        };
    };

    if(unidade == "0"){

        return dezenaEmExtenso;
    }
    else{
        
        return dezenaEmExtenso + " e " + unidadeEmExtenso;
    };

};

//Testando a função:

var i = 20;

while(i < 100){

    var numeroEmExtenso = escreveNumeroPorExtenso(i);

    console.log(numeroEmExtenso);

    i++;
};
