// ===============================
// PANTALLA DE CARGA
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1500);

});

// ===============================
// SOBRE PRINCIPAL
// ===============================

const envelope = document.getElementById("envelope");
const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");

if (envelope) {

    envelope.addEventListener("click", () => {

        envelope.style.transform = "scale(1.08)";

        const letter = document.querySelector(".letter");

        if (letter) {

            letter.style.top = "-60px";

        }

        setTimeout(() => {

            welcome.style.display = "none";
            invitation.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }, 1200);

    });

}

// ===============================
// CUENTA REGRESIVA
// ===============================

const targetDate = new Date("September 18, 2026 17:30:00").getTime();

function updateCountdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

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
        (distance % (1000 * 60)) / 1000
    );

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

setInterval(updateCountdown, 1000);

// ===============================
// BOTÓN DE MÚSICA
// ===============================

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let playing = false;

if (musicButton && music) {

    musicButton.addEventListener("click", () => {

        if (!playing) {

            music.play();
            musicButton.textContent = "⏸ Pausar música";

        } else {

            music.pause();
            musicButton.textContent = "🎵 Reproducir música";

        }

        playing = !playing;

    });

}

// ===============================
// SOBRE DE REGALO
// ===============================

const giftEnvelope = document.getElementById("giftEnvelope");

if (giftEnvelope) {

    giftEnvelope.addEventListener("click", () => {

        giftEnvelope.classList.toggle("open");

    });

}

// ===============================
// RSVP
// ===============================

const form = document.getElementById("rsvpForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("¡Gracias por confirmar tu asistencia!");

        form.reset();

    });

}
