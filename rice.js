function back_btn(){
    window.location.href = 'index.html';
}

let like = document.querySelectorAll('.like');
like.forEach(heart => {
    heart.addEventListener('click', function() {
        if (this.src.includes('https://img.icons8.com/?size=100&id=85038&format=png&color=000000')) {
            this.src = 'https://img.icons8.com/?size=100&id=84881&format=png&color=FA5252';
        } else {
            this.src = 'https://img.icons8.com/?size=100&id=85038&format=png&color=000000';
        }
    });
});

