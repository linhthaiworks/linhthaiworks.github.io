
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector(".footer");
    const lastCard = document.querySelector(".card.scroll");
    const pinnedSections = gsap.utils.toArray(".pinned");

pinnedSections.forEach((section, index, sections) => {
    let img = section.querySelector(".img");

    let nextSection = sections[index + 1] || lastCard;
    let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: index === sections.length - 1 ? `+=${section.offsetHeight / 2}` 
            : footer.offsetTop - window.innerHeight,
            pin: true,
            pinSpacing: false,
            scrub: 1,
        },
    });
    gsap.fromTo(
        img, { scale: 1 }, 
        {
        scale: 0.5,
        ease: "none",
        scrollTrigger: {
            trigger: section,
            start: "top top",
            end: endScalePoint,
            scrub: 1,
        },
    }
    );
});

const heroH1 = document.querySelector(".hero h1");
ScrollTrigger.create({
    trigger: document.body,
    start: "top top",
    end: "+=400vh",
    scrub: 1,
    onUpdate: (self) => {
        let opacityProgress = self.progress;
        heroH1.style.opacity = 1 - opacityProgress;
    },
});
});

function redirectTo(url) {
    window.location.href = url;
}

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