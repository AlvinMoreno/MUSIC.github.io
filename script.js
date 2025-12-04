let current = 1;

function showSlide(n) {
    document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
    document.getElementById("slide" + n).classList.add('active');
}

function nextSlide() {
    current++;
    if (current > 5) current = 5;
    showSlide(current);
}

function prevSlide() {
    current--;
    if (current < 1) current = 1;
    showSlide(current);
}
