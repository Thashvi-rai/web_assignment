document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Animate when 10% of the element is visible
    });

    // Find all elements to animate and start observing them
    const animatedElements = document.querySelectorAll('.hero-text, .hero-image, .passion-card');
    animatedElements.forEach(el => observer.observe(el));
});

function showMessage() {
  alert("Welcome to my website! 🎉");
}
