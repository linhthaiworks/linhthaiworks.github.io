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

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



const cursor = document.querySelector('.cursor');

// Cập nhật vị trí con trỏ theo chuột
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
});

// Tăng kích thước khi hover vào links và card
const hoverElements = document.querySelectorAll('a, .card');

hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(3)';
    });
    element.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

