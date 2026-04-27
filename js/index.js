//NOTA: Por enquanto, não usar LocalStorage.

let nomeU_lista = [];
let senhaU_lista = [];

//registrar

function registrar() {
    let NWnomeU = document.getElementById("newNomeUsu").value;
    let NWsenhaU = document.getElementById("newSenhaUsu").value;

    if (!NWnomeU || !NWsenhaU) {
        alert("Preencha todos os campos");
    } else {
        nomeU_lista.push(NWnomeU);
        senhaU_lista.push(NWsenhaU);
    }
}

//logar

function logar() {
    let nomeU = document.getElementById("nomeUsu").value;
    let senhaU = document.getElementById("senhaUsu").value;

    if (!nomeU || !senhaU) {
        alert("Preencha todos os campos");
    } else if (nomeU_lista.includes(nomeU)) {
        alert(`Bem vindo/a ${nomeU}!`);
    } else {
        alert("Informações não encontras, por favor registre-se");
    }
}

//APAGAR DEPOIS

function mos() {
    alert(nomeU_lista);
}

function mosSe() {
    alert(senhaU_lista);
}
