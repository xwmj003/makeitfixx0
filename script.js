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
};

function createFireworkExplosion(x, y) {
for (let i = 0; i < 30; i++) {
const firework = document.createElement("div");
firework.classList.add("firework");
firework.style.left = `${x}px`;
firework.style.top = `${y}px`;
firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
document.getElementById("fireworks").appendChild(firework);

const angle = Math.random() * 2 * Math.PI;
const distance = Math.random() * 100 + 50;
const xMove = Math.cos(angle) * distance;
const yMove = Math.sin(angle) * distance;

setTimeout(() => {
    firework.style.transform = `translate(${xMove}px, ${yMove}px) scale(0.5)`;
    firework.style.opacity = "0";
}, 100);

setTimeout(() => firework.remove(), 1100);
}
}

function launchFireworks() {
let interval = setInterval(() => {
const x = Math.random() * window.innerWidth;
const y = Math.random() * (window.innerHeight / 2) + window.innerHeight / 4;
createFireworkExplosion(x, y);
}, 300);

setTimeout(() => {
clearInterval(interval);
document.getElementById("fireworks").innerHTML = "";
}, 5000);
}

window.onload = launchFireworks;

function makeit1MostrarTexto(id) {
var texto = document.getElementById(id);  // esto son los botones de informaciones ocultados
texto.classList.toggle("makeit1-show");
}





let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('#imagedp0 .slide');
    const indicators = document.querySelectorAll('#imagedp0 .indicator');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        slideIndex = 0; // Volver al inicio
    } else if (index < 0) {
        slideIndex = totalSlides - 1; // Ir al final
    } else {
        slideIndex = index;
    }

    const offset = -slideIndex * 100; // Calcular el desplazamiento
    document.querySelector('#imagedp0-slides').style.transform = `translateX(${offset}%)`;

    // Actualizar los indicadores
    indicators.forEach((indicator, i) => {
        indicator.classList.remove('active');
        if (i === slideIndex) {
            indicator.classList.add('active');
        }
    });
}

function moveSlide(direction) {
    showSlide(slideIndex + direction);
}

// Mostrar la primera imagen al cargar
showSlide(slideIndex);
