const tagMain = document.querySelector("body > main");

const div = document.createElement("div");
const span = document.createElement("span");
const p = document.createElement("p");

div.style = "display: grid; place-items: center; position: absolute; top: 10%";
span.style = "font-size: 60px; font-family: monospace; color: rgb(75, 75, 75); font-weight: bold; text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.297)";
p.style = "font-size: 20px; font-weight: bold;";
p.innerHTML = "O tempo está acabando, aproveite nossas ofertas!";

div.appendChild(span);
div.appendChild(p);

tagMain.appendChild(div);

function contador(){

    const dataAtual = new Date();

    const horaAtual = dataAtual.getHours();
    const minutoAtual = dataAtual.getMinutes();
    const segundoAtual = dataAtual.getSeconds();

    let horasRestantes = 23 - horaAtual;
    let minutosRestantes = 59 - minutoAtual;
    let segundosRestantes = 59 - segundoAtual;

    if(horasRestantes < 10) horasRestantes = '0'+ horasRestantes;
    if(minutosRestantes < 10) minutosRestantes = '0'+ minutosRestantes;
    if(segundosRestantes < 10) segundosRestantes = '0'+ segundosRestantes;
    
    span.innerHTML =`${horasRestantes}:${minutosRestantes}:${segundosRestantes}`;
}

setInterval(contador,1000);