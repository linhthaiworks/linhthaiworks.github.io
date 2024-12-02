document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fly-in");
            } else {
                entry.target.classList.remove("fly-in");
            }
        });
    });

    images.forEach((img) => {
        observer.observe(img);
    });
});


