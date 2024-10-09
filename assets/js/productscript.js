let slideIndex = 1;
showSlides(slideIndex);

// Funzione per navigare avanti o indietro
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Funzione per mostrare la slide corrente
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
