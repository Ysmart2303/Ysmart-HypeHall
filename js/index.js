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
    mostrarTela('home');
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
      mostrarTela("login");
    }

}

// mostar

function mostrarTela(telaId) {
  const telas = ["login", "registro", "corpo", "home", "suporte", "contato"];

  telas.forEach(id => {
    const el = document.getElementById(id);
    el.classList.add("hidden"); // esconde todas
  });

  document.getElementById(telaId).classList.remove("hidden"); // mostra só uma

  erro.textContent = "";
  erroRE.textContent = "";
}

function mostrarAba(abaId) {
  const abas = ["corpoJogos", "corpoApps",];

  abas.forEach(id => {
    const ab = document.getElementById(id);
    ab.classList.add("hidden"); // esconde todas
  });

  document.getElementById(abaId).classList.remove("hidden"); // mostra só uma

}