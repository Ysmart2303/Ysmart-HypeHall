//NOTA: Por enquanto, não usar LocalStorage.

let nome = "Cujinm";
let senha = 2303;

//logar

function logar() {
    let nomeU = document.getElementById("nomeUsu").value;
    let senhaU = document.getElementById("senhaUsu").value;

    if (!nomeU || !senhaU) {
        nomeUsu.value = "";
        senhaUsu.value = "";
        alert("Preencha todos os campos");
    } else if (nomeU == nome && senhaU == senha) {
        nomeUsu.value = "";
        senhaUsu.value = "";
        alert(`Bem vindo senhor ${nomeU}!`);
        mostrar();
    } else {
       nomeUsu.value = "";
       senhaUsu.value = "";
       alert("Nome ou senha incorretos");
    }
}

// mostar
function mostrar() {
  const emm = document.getElementById("login");
  
  const el = document.getElementById("corpo");

  if (el.style.display === "none") {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }

  if (emm.style.display === "flex") {
    emm.style.display = "none";
  } else {
    emm.style.display = "flex";
  }
}

function mostrarRegistro() {
  const emm = document.getElementById("login");
  
  const el = document.getElementById("registro");

  if (el.style.display === "none") {
    el.style.display = "flex";
  } else {
    el.style.display = "none";
  }

  if (emm.style.display === "flex") {
    emm.style.display = "none";
  } else {
    emm.style.display = "flex";
  }
}

//registrar
function registrar() {
    let nomeR = document.getElementById("REnomeUsu").value;
    let senhaR = document.getElementById("REsenhaUsu").value;
    let emailR = document.getElementById("REemailUsu").value;

    if (!nomeR || !senhaR || !emailR) {
        alert("Preencha todos os campos");
    } else {
      REnomeUsu.value = "";
      REsenhaUsu.value = "";
      REemailUsu.value = "";
      alert("A funcão de registro ainda não está disponível, tente novamente mais tarde.");
      mostrarRegistro();
    }

}