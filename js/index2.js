 // conta padrão
    let nome = "Cujinm";
    let senha = "2303";

    let logado = false;

// LOGIN
function logar() {

  let nomeU = document.getElementById("nomeUsu").value;
  let senhaU = document.getElementById("senhaUsu").value;

  let erro = document.getElementById("erro");

  erro.textContent = "";

  // campos vazios
  if (!nomeU || !senhaU) {
    erro.textContent = "Preencha todos os campos";
    return;
  }

  // login conta fixa
  if (nomeU == nome && senhaU == senha) {

    logado = true;

    localStorage.setItem("logado", "true");
    localStorage.setItem("usuario", nomeU);

    document.getElementById("btnLogin").textContent = nomeU;

    document.getElementById("btnLogin")
    .setAttribute("onclick", "mostrarTela('conta')");

    alert(`Bem vindo senhor ${nomeU}!`);

    mostrarTela('home');
}
    // login conta registrada
     else if (nomeU == localStorage.getItem("nome") && senhaU == localStorage.getItem("senha")) {

    logado = true;

    localStorage.setItem("logado", "true");
    localStorage.setItem("usuario", nomeU);

    document.getElementById("btnLogin").textContent = nomeU;

    document.getElementById("btnLogin")
    .setAttribute("onclick", "mostrarTela('conta')");

    alert(`Bem vindo senhor ${nomeU}!`);

    mostrarTela('home');
}
  // erro
  else {
    erro.textContent = "Nome ou senha incorretos";
  }
}

//des;logar

function deslogar() {

    logado = false;

    localStorage.removeItem("logado");
    localStorage.removeItem("usuario");

    document.getElementById("btnLogin")
    .textContent = "Login";

    document.getElementById("btnLogin")
    .setAttribute("onclick", "mostrarTela('login')");

    mostrarTela("home");
}
// REGISTRO
function registrar() {

  let nomeR = document.getElementById("REnomeUsu").value;
  let senhaR = document.getElementById("REsenhaUsu").value;
  let emailR = document.getElementById("REemailUsu").value;

  let erroRE = document.getElementById("erroRE");

  erroRE.textContent = "";

  // campos vazios
  if (!nomeR || !senhaR || !emailR) {

    erroRE.textContent = "Preencha todos os campos";

    return;
  }

  // salvar
  localStorage.setItem("nome", nomeR);
  localStorage.setItem("senha", senhaR);
  localStorage.setItem("email", emailR);

  // limpar inputs
  document.getElementById("REnomeUsu").value = "";
  document.getElementById("REsenhaUsu").value = "";
  document.getElementById("REemailUsu").value = "";

  alert("Conta registrada com sucesso!");

  mostrarTela("login");
}

// mostar

function mostrarTela(telaId) {
  const telas = ["login", "registro", "corpo", "home", "suporte", "contato", "conta"];

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


//atualizar nome nao aba login
function attNome() {

  if (logado) {
    const nomeU = document.getElementById("nomeUsu").value;
    document.getElementById("nomePerfil").textContent = nomeU;
    document.getElementById("btnLogin").textContent = nomeU;

    document.getElementById("btnLogin").setAttribute("onclick", "mostrarTela('conta')");    

  } else if (localStorage.getItem("logado") !== "true") {

    document.getElementById("btnLogin").textContent = "Login";
    document.getElementById("btnLogin").setAttribute("onclick", "mostrarTela('login')");
  }
}

//atualizar foto
function atualizarFoto() {
  const fotoInput = document.getElementById("fotoInput");
  const fotoConta = document.getElementById("fotoConta");

  if (fotoInput.files && fotoInput.files[0]) {
    const reader = new FileReader();

    reader.onload = function(e) {
      fotoConta.textContent = ""; // Limpa o conteúdo anterior
      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = "Foto de Perfil";
      img.style.width = "100px"; // Ajuste o tamanho conforme necessário
      img.style.height = "100px";
      img.style.borderRadius = "50%"; // Deixa a imagem circular
      fotoConta.appendChild(img);
    };

    reader.readAsDataURL(fotoInput.files[0]);
  }
}       



const inputFoto = document.getElementById("inputFoto");

inputFoto.addEventListener("change", function () {

    const arquivo = this.files[0];

    if (arquivo) {

        const leitor = new FileReader();

        leitor.onload = function (e) {

            const foto = e.target.result;

            document.getElementById("fotoPerfil")
            .src = foto;

            localStorage.setItem("fotoPerfil", foto);

        };

        leitor.readAsDataURL(arquivo);
    }
});

// mostrarInfo

function mostrarInfo() {
  alert(23);
}

window.onload = function () {

    const loginSalvo = localStorage.getItem("logado");
    const usuarioSalvo = localStorage.getItem("usuario");
    const fotoSalva = localStorage.getItem("fotoPerfil");

    if (loginSalvo === "true") {

        logado = true;

        document.getElementById("btnLogin")
        .textContent = usuarioSalvo;

        document.getElementById("btnLogin")
        .setAttribute("onclick", "mostrarTela('conta')");

        document.getElementById("nomePerfil")
        .textContent = usuarioSalvo;

        if (fotoSalva) {

            document.getElementById("fotoPerfil")
            .src = fotoSalva;
        }
    }

    mostrarTela("home");
};