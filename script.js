// =========================
// SOBRE PREMIUM
// =========================

const cover = document.getElementById("cover");
const seal = document.getElementById("seal");
const invitation = document.getElementById("invitation");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

seal.addEventListener("click", () => {

    // Evita doble clic
    seal.style.pointerEvents = "none";

    // Abre el sobre
    cover.classList.add("open");

    // Inicia la música (si el archivo existe)
    if (music) {
        music.play().catch(() => {});
    }

    if (musicButton) {
        musicButton.innerHTML = "⏸ Pausar música";
    }

    // Muestra la invitación
    setTimeout(() => {

        invitation.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 1200);

    // Oculta el sobre
    setTimeout(() => {

        cover.classList.add("hidden");

    }, 1800);

});


// =========================
// CUENTA REGRESIVA
// =========================

const eventDate = new Date("September 18, 2026 17:30:00").getTime();

function countdown() {

    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance <= 0) {
        days.textContent = "00";
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
        return;
    }

    days.textContent = String(Math.floor(distance / 86400000)).padStart(2, "0");
    hours.textContent = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, "0");
    minutes.textContent = String(Math.floor((distance % 3600000) / 60000)).padStart(2, "0");
    seconds.textContent = String(Math.floor((distance % 60000) / 1000)).padStart(2, "0");

}

countdown();
setInterval(countdown, 1000);


// =========================
// BOTÓN DE MÚSICA
// =========================

if (musicButton) {

    musicButton.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicButton.innerHTML = "⏸ Pausar música";

        } else {

            music.pause();

            musicButton.innerHTML = "🎵 Música";

        }

    });

}
