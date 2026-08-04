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
