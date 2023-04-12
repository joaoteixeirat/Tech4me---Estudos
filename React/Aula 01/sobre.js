const mainTag = document.getElementById("main");

const btnSobre = document.querySelector(".sobre");

btnSobre.onclick = sobre;

function sobre(){

    mainTag.innerHTML = "Informações e tals..."
}