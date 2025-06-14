const phrases = ["O verdadeiro amor não se conta em segundos, mas em momentos inesquecíveis."];
const typewriterEl = document.getElementById('typewriter');
const container = document.getElementById('typewriterContainer');
const startButton = document.getElementById('startButton');
const memoryGameButton = document.getElementById('memoryGameButton');
const heartGameButton = document.getElementById('heartGameButton');

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

    if (!isDeleting && currentChar === phrase.length) {
        cycleCompleted = true;
        memoryGameButton.style.display = 'inline-block';
        heartGameButton.style.display = 'inline-block';
        return;
    }

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

memoryGameButton.addEventListener('click', () => {
    window.location.href = "jogos/jogo1.html";
});

heartGameButton.addEventListener('click', () => {
    window.location.href = "jogos/jogo2.html";
});