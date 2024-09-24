let currentSlide = 0;
const images = ['Gambar1.jpg', 'Gambar2.jpeg', 'Gambar3.jpeg']; 

function showContactAlert() {
    alert("Email : zackyjulioo@example.com\nTelepon : +62 813 7432 8040\n Alamat : JL. Pengayoman\n Media Sosial : AniesBaswedan");
}

function showSlide(index) {
    const slideImage = document.getElementById('slideImage');
    slideImage.src = "img/" + images[index];
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    showSlide(currentSlide);
}

showSlide(0);