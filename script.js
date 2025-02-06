
        function showContent(id) {
            document.querySelectorAll('.content').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(id).style.display = 'block';
        }
        document.addEventListener("DOMContentLoaded", function() {
            showContent('inicio');
        });

    document.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.2 });

        document.querySelectorAll('.fade-in').forEach(element => {
            observer.observe(element);
        });
    });
    
    function toggleMenu() {
document.getElementById("navbar").classList.toggle("show");
}
