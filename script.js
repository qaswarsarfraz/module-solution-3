// Countdown Timer
const countdown = document.getElementById('countdown');
const birthday = new Date('2024-11-08T00:00:00');

function updateCountdown() {
    const now = new Date();
    const diff = birthday - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

setInterval(updateCountdown, 1000);

// Confetti Animation
function createConfetti() {
    const confettiColors = ["#ff69b4", "#ffa07a", "#98fb98", "#87cefa", "#dda0dd"];
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti-piece');
        confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(confetti);
    }
}

// Add wish
const wishContainer = document.getElementById('wishContainer');

function addWish() {
    const wishInput = document.getElementById('wishInput').value;
    if (wishInput) {
        const wishMessage = document.createElement('p');
        wishMessage.textContent = wishInput;
        wishContainer.appendChild(wishMessage);
        document.getElementById('wishInput').value = '';
    }
}

// Play birthday music on load
window.onload = () => {
    createConfetti();
    document.getElementById("birthdayMusic").play();
};
