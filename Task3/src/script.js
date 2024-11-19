document.addEventListener("DOMContentLoaded", function () {
    let swiper;

    // Function to initialize Swiper
    function initializeSwiper() {
        swiper = new Swiper(".swiper", {
            direction: "horizontal",
            loop: true,
            slidesPerView: 3,
            spaceBetween: 50,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                375: {
                    slidesPerView: 1.2, // Show one full image and a bit of the second
                    spaceBetween: 20, // Adjust spacing for small screens
                },
                1440: {
                    slidesPerView: 3, // Default layout for larger screens
                    spaceBetween: 50,
                },
            },
            on: {
                slideChange: function () {
                    console.log("Active Slide Index:", this.realIndex); // Log active slide index
                },
            },
        });
    }

    // Initialize Swiper on page load
    initializeSwiper();

    // Toggle Swiper
    const toggleButton = document.getElementById("toggleSwiper");
    toggleButton.addEventListener("click", function () {
        if (swiper) {
            swiper.destroy(true, true); // Destroy Swiper instance
            swiper = null;
            console.log("Swiper Destroyed");
        } else {
            initializeSwiper(); // Reinitialize Swiper
            console.log("Swiper Initialized");
        }
    });
});