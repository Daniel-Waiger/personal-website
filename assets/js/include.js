// filepath: /assets/js/include.js
document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch('../includes/header.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('header').innerHTML = data;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load footer
    fetch('../includes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Initialize Carousels
    initializeCarousels();
});

function initializeCarousels() {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        track.classList.add('autoplay');
    });
}

function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const track = carousel.querySelector('.carousel-track');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const visibleItems = window.innerWidth >= 768 ? 3 : 1; // Adjust based on responsiveness
    let currentIndex = Math.round(parseInt(track.style.transform.replace('translateX(', '').replace('%)', '')) / -100);

    if (isNaN(currentIndex)) {
        currentIndex = 0;
    }

    currentIndex += direction;

    // Ensure the index stays within bounds
    if (currentIndex < 0) {
        currentIndex = totalItems - visibleItems;
    } else if (currentIndex > totalItems - visibleItems) {
        currentIndex = 0;
    }

    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}