// Carousel functionality
function moveSlide(carouselId, direction) {
    const carousel = document.getElementById(carouselId);
    const track = carousel.querySelector('.carousel-track');
    const items = track.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth;
    
    let currentTransform = track.style.transform;
    let currentTranslate = 0;
    
    if (currentTransform) {
        currentTranslate = parseInt(currentTransform.replace('translateX(', '').replace('px)', ''));
    }
    
    let newTranslate = currentTranslate + (direction * itemWidth);
    
    // Boundary checks
    if (newTranslate > 0) {
        newTranslate = -(items.length - 1) * itemWidth;
    } else if (newTranslate < -(items.length - 1) * itemWidth) {
        newTranslate = 0;
    }
    
    track.style.transform = `translateX(${newTranslate}px)`;
}

// Auto-play carousel (optional)
function autoplayCarousel(carouselId, interval = 5000) {
    setInterval(() => {
        moveSlide(carouselId, -1);
    }, interval);
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Optional: Enable auto-play for all carousels
    // autoplayCarousel('microscopy-carousel');
    // autoplayCarousel('image-analysis-carousel');
    // autoplayCarousel('3d-models-carousel');
});

// Touch/swipe support for mobile
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        });
        
        carousel.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
        });
        
        carousel.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            
            const deltaX = startX - currentX;
            if (Math.abs(deltaX) > 50) { // Minimum swipe distance
                if (deltaX > 0) {
                    moveSlide(carousel.id, -1); // Swipe left, move to next
                } else {
                    moveSlide(carousel.id, 1);  // Swipe right, move to previous
                }
            }
        });
    });
});
