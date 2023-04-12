const formDeCadastro = document.querySelector("body > div > form");
const divTermos = document.querySelector("body > div > form > div");
const inputEmail = document.querySelector("body > div > form > input");
const inputCheckbox = document.querySelector("#terms-agree");
const buttonCadastrar = document.querySelector("body > div > form > button");

formDeCadastro.addEventListener("submit", event => event.preventDefault());

const p = document.createElement("p");
divTermos.appendChild(p);

function cadastrar() {

	const aceitouOsTermos = validarCheckbox(inputCheckbox);
	if (!aceitouOsTermos) return;

	const emailDoUsuario = inputEmail.value;
	const emailValido = validarEmail(emailDoUsuario);

	if (!emailDoUsuario) {

		exibirPrompt();
	}
	else if (emailValido) {

		buttonCadastrar.innerHTML = `E-mail “${emailDoUsuario}” cadastrado com sucesso!`;
	}
	else {

		alert("O e-mail digitado não é válido.");
	}
}

function exibirPrompt() {

	const emailDoPrompt = prompt("O campo de email está vazio, para prosseguir digite seu email abaixo:");
	const emailValido = validarEmail(emailDoPrompt);

	if (!emailDoPrompt) {

		alert("Não foi possível realizar o cadastro pois nenhum email foi digitado.");
	}
	else if (emailValido) {

		buttonCadastrar.innerHTML = `E-mail “${emailDoPrompt}” cadastrado com sucesso!`;
	}
	else {

		alert("O e-mail digitado não é válido.");
	}
}

function validarEmail(email) {

	const temTamanhoMinino = email.length >= 10 ? true : false;

	const possuiApenasUmArroba = email.split("@").length == 2;

	let possuiAlgumPonto;

	if (possuiApenasUmArroba) {

		const dominioDoEmail = email.split("@")[1];

		possuiAlgumPonto = dominioDoEmail.indexOf(".") !== -1 ? true : false;
	}

	return temTamanhoMinino && possuiApenasUmArroba && possuiAlgumPonto;
}

function validarCheckbox(checkbox) {

	if (checkbox.checked) {

		p.innerHTML = "";
		divTermos.style = "";

		return true;
	}
	else {

		p.style = "font-size: 12px; background-color: white; color: rgb(255, 0, 0); text-align: center";
		p.innerHTML = "*Você precisa aceitar os termos de uso.";

		divTermos.style = "border: 1px solid rgba(255, 0, 0, 0.349); padding: 5px; border-radius: 10px";

		return false;
	}
}

buttonCadastrar.onclick = cadastrar;