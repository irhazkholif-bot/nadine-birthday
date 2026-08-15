// Generate falling hearts
function createHearts() {
    const container = document.getElementById('hearts-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-50px';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Create hearts every 300ms
    setInterval(createHeart, 300);
}

// Music player
const musicBtn = document.getElementById('music-btn');
const audioElement = document.getElementById('birthday-song');

musicBtn.addEventListener('click', function() {
    if (audioElement.paused) {
        audioElement.play();
        musicBtn.innerHTML = '<span>⏸️ Pause</span>';
        musicBtn.style.background = 'linear-gradient(135deg, #FFB6E1, #BA55D3)';
        createConfetti();
    } else {
        audioElement.pause();
        musicBtn.innerHTML = '<span>🎵 Putar Lagu</span>';
        musicBtn.style.background = 'linear-gradient(135deg, #FFB6E1, #E0BBE4)';
    }
});

// Initialize when page loads
window.addEventListener('load', function() {
    createHearts();
    // Show confetti on page load
    setTimeout(() => {
        createConfetti();
    }, 500);
});

function createConfetti() {
    const container = document.getElementById('hearts-container');
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = Math.random() * (window.innerHeight / 2) + 'px';
        heart.style.fontSize = (Math.random() * 25 + 20) + 'px';
        heart.style.opacity = 1;
        
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
}

// Add sound effect on scroll (optional)
let lastScrollTime = 0;
window.addEventListener('scroll', function() {
    const now = Date.now();
    if (now - lastScrollTime > 500) {
        lastScrollTime = now;
        createConfetti();
    }
}, false);