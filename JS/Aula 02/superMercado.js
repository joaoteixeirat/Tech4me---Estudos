const promocaoPar = function(valor){
    return valor * 0.30;
};

const promocaoImpar = function(valor){
    return valor * 0.35;
};

const min = new Date().getMinutes();

var funcao;

if( min % 2 == 0 ) funcao = promocaoPar;
else funcao = promocaoImpar;

console.log(funcao(100));