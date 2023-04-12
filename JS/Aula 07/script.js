const container = document.querySelector(".container");

function listarCarros(){
    

    fetch(" https://8711-138-185-96-36.ngrok.io/carros")
    .then(response => response.json())
    .then((response) => {

        const lista = document.createElement("ul");

        container.appendChild(lista);

        for(const carros of response){

            const item = document.createElement("li");

            item.innerText = `Carro: ${carros.modelo} | Montadora: ${carros.montadora} | Dono: ${carros.aluno}`;

            lista.appendChild(item);
        }
    })
}