const phrases = [
  "Faltam poucos dias...",
  "Tem uma surpresa vindo aí...",
  "Você está preparada?",
  "Vai ser inesquecível!",
  "Contando os segundos..."
];

const typewriterEl = document.getElementById('typewriter');
const container = document.getElementById('typewriterContainer');
const startButton = document.getElementById('startButton');
const gameButton = document.getElementById('gameButton');

let currentPhrase = 0;
let currentChar = 0;
let isDeleting = false;
let typingStarted = false;
let cycleCompleted = false;

function type() {
  const phrase = phrases[currentPhrase];

  if (isDeleting) {
    typewriterEl.textContent = phrase.substring(0, currentChar--);
  } else {
    typewriterEl.textContent = phrase.substring(0, currentChar++);
  }

  // Quando terminou de escrever a frase
  if (!isDeleting && currentChar === phrase.length) {
    // Se for a última frase, não apaga, apenas mostra o botão
    if (currentPhrase === phrases.length - 1) {
      cycleCompleted = true;
      gameButton.style.display = 'inline-block';
      return;
    }

    isDeleting = true;
    setTimeout(type, 2000);
    return;
  }

  // Quando terminou de apagar a frase
  if (isDeleting && currentChar === 0) {
    isDeleting = false;
    currentPhrase++;
  }

  setTimeout(type, isDeleting ? 50 : 50);
}

startButton.addEventListener('click', () => {
  if (!typingStarted) {
    typingStarted = true;
    startButton.style.display = 'none';
    container.style.display = 'inline-block';
    type();
  }
});

gameButton.addEventListener('click', () => {
  window.location.href = "jogos/jogo1.html";
});
