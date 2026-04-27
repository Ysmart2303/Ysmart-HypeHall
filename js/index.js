//NOTA: Por enquanto, não usar LocalStorage.

let nomeU_lista = "Cujinm";
let senhaU_lista = 2303;

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
    } else if (nomeU == nomeU_lista && senhaU == senhaU_lista) {
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

// mostar
function mostrar() {
  const el = document.getElementById("encon_regi");
  
  const emm = document.getElementById("segredo");

  if (el.style.display === "none") {
    el.style.display = "block";
  } else {
    el.style.display = "none";
  }
}