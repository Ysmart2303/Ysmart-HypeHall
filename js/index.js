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
    
    erro.textContent = "";
    erro.textContent = "Preencha todos os campos";
  } else if (nomeU == nome && senhaU == senha) {
    nomeUsu.value = "";
    senhaUsu.value = "";
    alert(`Bem vindo senhor ${nomeU}!`);
    mostrarTela("corpo");
  } else {
    nomeUsu.value = "";
    senhaUsu.value = "";
    erro.textContent = "Nome ou senha incorretos";
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

      erroRE.textContent = "";
      erroRE.textContent = "Preencha todos os campos";
    } else {
      REnomeUsu.value = "";
      REsenhaUsu.value = "";
      REemailUsu.value = "";
      alert("A funcão de registro ainda não está disponível, tente novamente mais tarde.");
      mostrarLogin();
    }

}

// mostar

function mostrarTela(telaId) {
  const telas = ["login", "registro", "corpo"];

  telas.forEach(id => {
    const el = document.getElementById(id);
    el.classList.add("hidden"); // esconde todas
  });

  document.getElementById(telaId).classList.remove("hidden"); // mostra só uma
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
