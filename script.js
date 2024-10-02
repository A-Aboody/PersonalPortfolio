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

wrapLetters('.interactive-text');

document.getElementById('scroll-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('work-section').scrollIntoView({
        behavior: 'smooth'
    });
});


document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId); 

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});