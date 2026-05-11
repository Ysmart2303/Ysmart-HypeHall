let nome = "Cujinm";
let senha = "2303";
let logado = false;

function logar() {

  let nomeU = document.getElementById("nomeUsu").value;
  let senhaU = document.getElementById("senhaUsu").value;

  if (!nomeU || !senhaU) {

    document.getElementById("nomeUsu").value = "";
    document.getElementById("senhaUsu").value = "";

    erro.textContent = "Preencha todos os campos";

  } else if (nomeU == nome && senhaU == senha) {

    document.getElementById("nomeUsu").value = "";
    document.getElementById("senhaUsu").value = "";

    logado = true;

    alert(`Bem vindo senhor ${nomeU}!`);

    document.getElementById("btnLogin").textContent = nomeU;
    document.getElementById("btnLogin").setAttribute("onclick", "mostrarTela('conta')");
    document.getElementById("nomePerfil").textContent = nomeU;

    mostrarTela('home');

  } else {

    document.getElementById("nomeUsu").value = "";
    document.getElementById("senhaUsu").value = "";

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

//verificar se o usuário está logado para acessar o corpo do site

// function verificarAcessoCorpo() {

//   if (logado) {
//     mostrarTela('corpo');
//   } else {
//     if(confirm("Faça login para acessar o conteúdo. Deseja ir para a tela de login?")) {
//       mostrarTela('login');
//     } else {
//       mostrarTela('home');
//     }
//   }
// }

// window.onload = () => { //roda quando a pagina carregar
//     verificarAcessoCorpo();
//     modBntLogin();
// };

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

            document.getElementById("fotoPerfil")
            .src = e.target.result;

        };

        leitor.readAsDataURL(arquivo);
    }
});