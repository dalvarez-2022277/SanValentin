document.addEventListener("DOMContentLoaded", function () {
    const btnNo = document.querySelector("#btn-random");

    if (btnNo) { // Evita errores si el botón no está en la página
        btnNo.addEventListener("mouseenter", function (e) {
            moverAleatoriamente(e.target);
        });
    }

    function moverAleatoriamente(btn) {
        btn.style.position = "absolute";
        btn.style.top = Math.floor(Math.random() * 80 + 10) + "%";
        btn.style.left = Math.floor(Math.random() * 80 + 10) + "%";
    }

    // Función para crear corazones animados
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💗";
        document.body.appendChild(heart);

        heart.style.left = Math.random() * 100 + "vw"; // Posición horizontal aleatoria
        heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // Entre 3 y 6 segundos
        heart.style.fontSize = Math.random() * 20 + 10 + "px"; // Tamaño aleatorio
        heart.style.opacity = Math.random() * 0.7 + 0.3; // Transparencia variable

        setTimeout(() => {
            heart.remove(); // Eliminar corazones después de 5s
        }, 5000);
    }

    setInterval(createHeart, 300);
});
