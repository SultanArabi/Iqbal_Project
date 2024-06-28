document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;

    // Show the first slide and activate the first dot initially
    slides[currentSlide].style.display = "block";
    dots[currentSlide].classList.add("active");

    // Function to show a particular slide
    function showSlide(n) {
        if (n < 0 || n >= slides.length) return;

        slides.forEach(slide => {
            slide.style.display = "none";
        });

        dots.forEach(dot => {
            dot.classList.remove("active");
        });

        slides[n].style.display = "block";
        dots[n].classList.add("active");
        currentSlide = n;
    }

    // Event listeners for dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showSlide(index);
        });
    });

    // Automatic slideshow (optional)
    /*
    setInterval(function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 3000);
    */
});
