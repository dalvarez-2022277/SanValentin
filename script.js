document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.querySelector("#btn-random");

    function moverAleatoriamente(btn) {
        btn.style.position = "absolute";
        btn.style.top = Math.floor(Math.random() * 80 + 10) + "%";
        btn.style.left = Math.floor(Math.random() * 80 + 10) + "%";
    }

    if (btnNo) { 
        // Para computadoras (hover)
        btnNo.addEventListener("mouseenter", function (e) {
            moverAleatoriamente(e.target);
        });

        // Para teléfonos (toque)
        btnNo.addEventListener("touchstart", function (e) {
            e.preventDefault(); // Evita el comportamiento normal del enlace
            moverAleatoriamente(e.target);
        });
    }

    // Función para crear corazones animados
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.body.appendChild(heart);

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; 
        heart.style.fontSize = Math.random() * 20 + 10 + "px"; 
        heart.style.opacity = Math.random() * 0.7 + 0.3; 

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 300);
});
