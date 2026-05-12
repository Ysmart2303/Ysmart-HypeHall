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

        entrarConta(nomeU);

      }

      // login conta registrada
      else if (
        nomeU == localStorage.getItem("nome") &&
        senhaU == localStorage.getItem("senha")
      ) {

        entrarConta(nomeU);

      }

      // erro
      else {

        erro.textContent = "Nome ou senha incorretos";

      }
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

// mostrarInfo

function mostrarInfo() {
  

  alert(23);
}