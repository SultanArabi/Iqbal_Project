document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let currentSlide = 0;
    let slideInterval;

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

    // Function to start automatic slideshow
    function startSlider() {
        showSlide(currentSlide); // Show initial slide (first slide)
        slideInterval = setInterval(function() {
            showSlide(currentSlide + 1);
        }, 5000); // 7 seconds interval
    }

    // Event listener for clicking on dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showSlide(index);
            clearInterval(slideInterval); // Stop automatic slide interval
            startSlider(); // Restart automatic slideshow after manual click
        });
    });

    // Start automatic slideshow initially
    startSlider();
});
