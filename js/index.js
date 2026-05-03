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
    
    nomeUsu.placeholder = "Preencha o campo 'nome'";
    senhaUsu.placeholder = "Preencha o campo 'senha'";
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

//registrar
function registrar() {
    let nomeR = document.getElementById("REnomeUsu").value;
    let senhaR = document.getElementById("REsenhaUsu").value;
    let emailR = document.getElementById("REemailUsu").value;

    if (!nomeR || !senhaR || !emailR) {
      REnomeUsu.value = "";
      REsenhaUsu.value = "";
      REemailUsu.value = "";

      REnomeUsu.placeholder = "Preencha o campo 'nome'";
      REsenhaUsu.placeholder = "Preencha o campo 'senha'";
      REemailUsu.placeholder = "Preencha o campo 'email'";
    } else {
      REnomeUsu.value = "";
      REsenhaUsu.value = "";
      REemailUsu.value = "";
      alert("A funcão de registro ainda não está disponível, tente novamente mais tarde.");
      mostrarRegistro();
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

function moverEsquerda() {
  const Jogos = document.getElementById("corpoJogos");
  const Apps = document.getElementById("corpoApps");

  if (Jogos.style.display === "flex") {
    Jogos.style.display = "none";
    Apps.style.display = "flex";
  } else {
    Jogos.style.display = "flex";
    Apps.style.display = "none";
  }

}

function moverDireita() {
  const Jogos = document.getElementById("corpoJogos");
  const Apps = document.getElementById("corpoApps");

  if (Jogos.style.display === "none") {
    Jogos.style.display = "flex";
    Apps.style.display = "none";
  } else {
    Jogos.style.display = "none";
    Apps.style.display = "flex";
  }
  
}
