const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2
});

document.querySelectorAll(".section, .hero-copy, .hero-panel, .contact-card").forEach((element) => {
    observer.observe(element);
});