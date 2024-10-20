const images = document.querySelectorAll('.gallery-img');
let currentIndex = 0;


images[currentIndex].classList.add('show');


function showNextImage() {
    
    images[currentIndex].classList.remove('show');
    
    
    currentIndex = (currentIndex + 1) % images.length;
    
    
    images[currentIndex].classList.add('show');
}

setInterval(showNextImage, 2000);

document.getElementById('an-link').addEventListener('click', function(event) {
    event.preventDefault();

    
    const hiddenMessage = document.getElementById('hidden-message');
    hiddenMessage.classList.toggle('visible');

    
    if (hiddenMessage.classList.contains('visible')) {
        const message = "Liebe Schwester, ich wünsche dir zum 20. Oktober einen wunderschönen Tag voller Freude und Lächeln! Du bist eine unglaubliche Frau, und ich bewundere deine Stärke und dein großes Herz. Möge jeder Moment deines Lebens von Glück und Liebe begleitet sein. Alles Liebe zum Frauentag!";
        const typedMessage = document.getElementById('typed-message');

        
        typedMessage.textContent = '';

       
        let i = 0;
        function typeWriter() {
            if (i < message.length) {
                typedMessage.textContent += message.charAt(i);
                i++;
                setTimeout(typeWriter, 50); 
            }
        }
        typeWriter();
    }
});

