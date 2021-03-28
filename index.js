const regexCPF = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
const regexCNPJ = /[0-9]{2}\.?[0-9]{3}\.?[0-9]{3}\/?[0-9]{4}\-?[0-9]{2}/;
const regexEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const regexSenha8Car1Num = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function inputSubmitLogin() {
    const inputEmail = document.getElementById("inputEmailLogin").value;
    if (regexEmail.test(inputEmail)) {
    } else {
        alert("Digite um e-mail valido");
    }
    const inputSenha = document.getElementById("inputSenhaLogin").value;
    if (regexSenha8Car1Num.test(inputSenha) || inputSenha === "") {
        alert("Senha invalida");
    } else {
    }
}

function inputSubmitCadastroPF() {
    const inputNome = document.getElementById("inputNomePF").value;
    if (inputNome !== "") {
    } else {
        alert("Nome vázio");
    }

    const inputEmail = document.getElementById("inputEmailPF").value;
    if (regexEmail.test(inputEmail)) {
    } else {
        alert("Email Invalido");
    }

    const inputCPF = document.getElementById("inputCPF").value;
    if (regexCPF.test(inputCPF)) {
    } else {
        alert("CPF Invalido");
    }

    const inputEndereco = document.getElementById("inputEnderecoPF").value;
    if (inputEndereco !== "") {
    } else {
        alert("Endereço vázio");
    }

    const inputSenha = document.getElementById("inputSenhaPF").value;
    if (inputSenha !== "") {
    } else {
        alert("Senha vázia");
    }
}

function inputSubmitCadastroPJ() {
    const inputNomePJ = document.getElementById("inputNomePJ").value;
    if (inputNomePJ !== "") {
        console.log("nome recebido");
    } else {
        alert("nome vazio");
    }

    const inputEmailPJ = document.getElementById("inputEmailPJ").value;
    if (regexEmail.test(inputEmailPJ)) {
        console.log("email recebido");
    } else {
        alert("Email Invalido");
    }

    const inputCNPJ = document.getElementById("inputCNPJ").value;
    if (inputCNPJ !== regexCNPJ) {
        console.log("cnpj recebido");
    } else {
        alert("cnpj Invalido");
    }
    const inputEnderecoPJ = document.getElementById("inputEnderecoPJ").value;
    if (inputEnderecoPJ !== "") {
        console.log("Endereço recebido");
    } else {
        alert("endereco Invalido");
    }
    const inputSenhaPJ = document.getElementById("inputSenhaPJ").value;
    if (inputSenhaPJ !== "") {
        console.log("Senha recebido");
    } else {
        alert("Senha Invalida");
    }
}

function inputSubmitNewsLetter() {
    const inputNewsLetterEmail = document.getElementById("submitNewsLetter").value;
    if (regexEmail.test(inputNewsLetterEmail)) {
        alert("Cadastro efetuado com sucesso!");
    } else {
        alert("Email Invalido");
    }
}

//CAROUSSEL SCRIPTS
const delay = 3000 //ms

const slides = document.querySelector('.slides')
const slidesCount = slides.childElementCount
const maxLeft = (slidesCount - 1) * 100 * -1

let current = 0

function changeSlide(next = true) {
    if (next) {
        current += current > maxLeft ? -100 : current * -1
    } else {
        current = current < 0 ? current + 100 : maxLeft
    }

    slides.style.left = current + '%'
}

let autoChange = setInterval(changeSlide, delay)
const restart = function () {
    clearInterval(autoChange)
    autoChange = setInterval(changeSlide, delay)
}

// Controls
document.querySelector('.next-slide').addEventListener('click', function () {
    changeSlide()
    restart()
})

document.querySelector('.prev-slide').addEventListener('click', function () {
    changeSlide(false)
    restart()
})
