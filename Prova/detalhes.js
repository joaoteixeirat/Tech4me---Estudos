const imagemDoCard = document.querySelector("body > div > div > img");
const tituloDoCard = document.querySelector("body > div > div > div > p.subtitle");
const descricaoDoCard = document.querySelector("body > div > div > div > p.long-description");

const apiUrl = "https://641cf247b556e431a878fb78.mockapi.io/produto/";

const idPrimeiroProduto = 19;
const idSegundoProduto = 20;

fetch(apiUrl + idPrimeiroProduto)
.then(tratarDados)
.then(modificarCard);

function modificarCard(dados){

    imagemDoCard.src = dados.imagem;
    tituloDoCard.innerHTML = dados.titulo;
    descricaoDoCard.innerHTML = dados.descricao;
}

function tratarDados(response){

    return response.json();
}