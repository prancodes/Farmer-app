let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000);
}

function rice(){
    window.location.href = './rice/rice.html';
}

function veggies(){
    window.location.href = './veggies/veggies.html';
}

function fruits(){
    window.location.href = './fruits/fruits.html';
}

function grains(){
    window.location.href = './grains/grains.html';
}
