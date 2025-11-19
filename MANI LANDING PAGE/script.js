document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const features = document.querySelectorAll('.feature-item');
    features.forEach((feature, index) => {
        feature.style.opacity = "0";
        feature.style.transform = "translateY(30px)";
        feature.style.transition = `all 0.8s cubic-bezier(0.22, 1, 0.36, 1) ${index * 0.1}s`;
        observer.observe(feature);
    });

    const statement = document.querySelector('.big-statement');
    if (statement) {
        statement.style.opacity = "0";
        statement.style.transform = "translateY(30px)";
        statement.style.transition = "all 1s ease";
        observer.observe(statement);
    }
});