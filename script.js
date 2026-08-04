// ==============================
// ELEMENTOS
// ==============================

const cover = document.getElementById("cover");
const envelope = document.getElementById("envelope");
const flap = document.querySelector(".flap");

const invitation = document.getElementById("invitation");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

// ==============================
// ABRIR SOBRE
// ==============================

envelope.addEventListener("click", () => {

    // abre la tapa
    flap.style.transform = "rotateX(180deg)";

    // espera la animación
    setTimeout(() => {

        cover.style.display = "none";

        invitation.style.display = "block";

        // intenta reproducir la música
        music.play().then(() => {

            musicButton.innerHTML = "⏸ Pausar música";

        }).catch(() => {

            musicButton.innerHTML = "▶ Reproducir música";

        });

    }, 900);

});

// ==============================
// BOTÓN DE MÚSICA
// ==============================

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "⏸ Pausar música";

    } else {

        music.pause();

        musicButton.innerHTML = "▶ Reproducir música";

    }

});
// ==============================
// CUENTA REGRESIVA
// ==============================

const eventDate = new Date("2026-09-18T17:30:00").getTime();

function updateCountdown(){

    const now = new Date().getTime();

    const distance = eventDate - now;

    if(distance <= 0){

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").textContent =
        String(days).padStart(2,"0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2,"0");

}

updateCountdown();

setInterval(updateCountdown,1000);
