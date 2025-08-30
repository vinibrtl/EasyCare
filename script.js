function mostrarUsuario (id) {
    let mostrarUsuario = document.getElementById(id);
    let estavaVisivel = mostrarUsuario.style.display === "block";
   
    if (estavaVisivel) {
        mostrarUsuario.style.display = "none";
    } else {
        mostrarUsuario.style.display = "block";
    }
}

let timer;

function mostrarOpcao() {
  const opcao = document.getElementById("opcao");
  opcao.style.display = "block";

  timer = setTimeout(() => {
    confirmar();
  }, 10000);
}

function confirmar() {
  clearTimeout(timer);
  document.getElementById("opcao").style.display = "none";
  alert("Ligando!");
}

function cancelar() {
  clearTimeout(timer);
  document.getElementById("opcao").style.display = "none";
  alert("Cancelado!");
}