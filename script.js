const button = document.getElementById('funButton');
const emojiContainer = document.getElementById('emojiContainer');
const audio = document.getElementById('funnyMusic');
const emojis = ['8abra', '🩹💊', '🚬', '🍾', '🚬','asba', '🍾', '🚬', '🍾', 'omk', '🩹💊'];

button.addEventListener('click', () => {
  // Start RGB background animation
  document.body.style.animation = 'rgbBackground 5s infinite';

  // Play funny music
  audio.play();

  // Display random emojis
  setInterval(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiContainer.textContent += randomEmoji;
  }, 300);
});