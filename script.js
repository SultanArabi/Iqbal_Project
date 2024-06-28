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

    // Function to move to the next slide
    function moveToNextSlide() {
        showSlide(currentSlide + 1);
        clearInterval(slideInterval); // Stop automatic slide interval
        slideInterval = setInterval(function() {
            moveToNextSlide();
        }, 5000); // Restart automatic slideshow after manual navigation
    }

    // Event listener for clicking anywhere on the document (excluding dots)
    document.addEventListener("click", function(event) {
        const clickedElement = event.target;
        if (!clickedElement.closest(".dot")) {
            moveToNextSlide();
        }
    });

    // Event listener for clicking on dots
    dots.forEach((dot, index) => {
        dot.addEventListener("click", function() {
            showSlide(index);
            clearInterval(slideInterval); // Stop automatic slide interval
            slideInterval = setInterval(function() {
                moveToNextSlide();
            }, 5000); // Restart automatic slideshow after manual click
        });
    });

    // Start automatic slideshow initially
    slideInterval = setInterval(function() {
        moveToNextSlide();
    }, 5000);
});
