// Function to wrap each letter of a string in a span
function wrapLetters(selector) {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
      const text = element.innerText;
      element.innerHTML = ''; // Clear the original text
      text.split('').forEach(letter => {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = letter;
        element.appendChild(span);
      });
    });
}

// Wrap letters for all interactive text elements
wrapLetters('.interactive-text');

// Scroll down on button click for "Scroll Down" button
document.getElementById('scroll-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of anchor links
    document.getElementById('work-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// JavaScript for smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default behavior of anchor links
        const targetId = this.getAttribute('href'); // Get target section ID
        const targetSection = document.querySelector(targetId); // Select target section

        // Scroll to target section smoothly
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Play audio when the Play button is clicked
const playButton = document.getElementById('play-btn');
const audioPlayer = document.getElementById('audio-player');

playButton.addEventListener('click', function() {
    audioPlayer.play(); // Play the sound when the button is clicked
});