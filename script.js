const porta = document.getElementById("porta");
const portaCena = document.getElementById("portaCena");
const salaCena = document.getElementById("salaCena");
const sala = document.getElementById("sala");
const interruptor = document.getElementById("interruptor");

const paloma = document.getElementById("paloma");
const rickmanAndando = document.getElementById("rickmanAndando");
const rickmanNormal = document.getElementById("rickmanNormal");

const dialogoBox = document.getElementById("dialogoBox");
const dialogoTexto = document.getElementById("dialogoTexto");
const proximoDialogo = document.getElementById("proximoDialogo");

const presenteBox = document.getElementById("presenteBox");
const rosaBox = document.getElementById("rosaBox");
const cartaBox = document.getElementById("cartaBox");

const abrirRosa = document.getElementById("abrirRosa");
const abrirCarta = document.getElementById("abrirCarta");
const reiniciar = document.getElementById("reiniciar");

const falas = [
  "ALAN: Oi... eu trouxe isso para você.",
  "PALOMA: Nossa... que surpresa linda.",
  "ALAN: Hoje é o seu dia, então eu queria estar aqui.",
  "PALOMA: Eu estou muito feliz por todos vocês estarem aqui, principalmente você, Alan.",
  "ALAN: Você é muito importante para mim, e eu espero que esse presente te faça sorrir.",
  "PALOMA: Só de te ver aqui, eu já estou sorrindo.",
  "ALAN: Feliz aniversário para a pessoa mais incrível que eu conheço. Eu te amo muito ❤️",
  "PALOMA: Eu também te amo muito."
];

let falaAtual = 0;

porta.addEventListener("click", () => {
  portaCena.classList.remove("ativa");
  salaCena.classList.add("ativa");
});

interruptor.addEventListener("click", () => {
  sala.classList.remove("apagada");
  sala.classList.add("acesa");

  criarConfetes();

  setTimeout(() => {
    iniciarCenaRickman();
  }, 1500);
});

function iniciarCenaRickman() {
  let posicao = 500;
  const destino = 470;

  const animacao = setInterval(() => {
    posicao -= 6;
    rickmanAndando.style.left = `${posicao}px`;

    if (posicao <= destino) {
      clearInterval(animacao);
      rickmanAndando.classList.add("escondido");
      rickmanNormal.classList.remove("escondido");
      paloma.src = "imagens/Paloma-reagindo.png";

      setTimeout(() => {
        abrirDialogo();
      }, 500);
    }
  }, 50);
}

function abrirDialogo() {
  falaAtual = 0;
  dialogoTexto.textContent = falas[falaAtual];
  dialogoBox.classList.remove("escondido");
}

proximoDialogo.addEventListener("click", () => {
  falaAtual++;

  if (falaAtual < falas.length) {
    dialogoTexto.textContent = falas[falaAtual];
  } else {
    dialogoBox.classList.add("escondido");

    setTimeout(() => {
      presenteBox.classList.remove("escondido");
    }, 400);
  }
});

abrirRosa.addEventListener("click", () => {
  presenteBox.classList.add("escondido");
  rosaBox.classList.remove("escondido");
});

abrirCarta.addEventListener("click", () => {
  rosaBox.classList.add("escondido");
  cartaBox.classList.remove("escondido");
});

reiniciar.addEventListener("click", () => {
  location.reload();
});

function criarConfetes() {
  const confetes = document.getElementById("confetes");
  confetes.innerHTML = "";

  const cores = ["#ffffff", "#ff8fc1", "#8f6dff", "#ffd45b", "#6bc8ff"];

  for (let i = 0; i < 40; i++) {
    const confete = document.createElement("span");
    confete.style.left = Math.random() * 100 + "%";
    confete.style.top = -Math.random() * 400 + "px";
    confete.style.background = cores[Math.floor(Math.random() * cores.length)];
    confete.style.animationDelay = Math.random() * 3 + "s";
    confete.style.animationDuration = 3 + Math.random() * 3 + "s";
    confetes.appendChild(confete);
  }
}