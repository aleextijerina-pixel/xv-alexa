//======================================
// ELEMENTOS
//======================================

const cover = document.getElementById("cover");
const invitation = document.getElementById("invitation");

const seal = document.getElementById("seal");

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

//======================================
// ABRIR SOBRE
//======================================

seal.addEventListener("click", () => {

    cover.classList.add("open");

    // iniciar música
    if (music) {

        music.play().catch(()=>{});

        musicButton.innerHTML="Pausar música";

    }

    // mostrar invitación

    setTimeout(()=>{

        invitation.style.display="block";

        invitation.style.opacity="0";

        setTimeout(()=>{

            invitation.style.transition="1s";

            invitation.style.opacity="1";

        },50);

    },900);

    // ocultar portada

    setTimeout(()=>{

        cover.classList.add("hidden");

    },1700);

});

//======================================
// BOTÓN DE MÚSICA
//======================================

musicButton.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        musicButton.innerHTML="Pausar música";

    }else{

        music.pause();

        musicButton.innerHTML="Reproducir música";

    }

});

//======================================
// CUENTA REGRESIVA
//======================================

const eventDate = new Date("2026-09-18T17:30:00").getTime();

function countdown(){

    const now = new Date().getTime();

    const distance = eventDate-now;

    if(distance<=0){

        days.innerHTML="00";
        hours.innerHTML="00";
        minutes.innerHTML="00";
        seconds.innerHTML="00";

        return;

    }

    const d=Math.floor(distance/(1000*60*60*24));

    const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const m=Math.floor((distance%(1000*60*60))/(1000*60));

    const s=Math.floor((distance%(1000*60))/1000);

    document.getElementById("days").innerHTML=String(d).padStart(2,"0");

    document.getElementById("hours").innerHTML=String(h).padStart(2,"0");

    document.getElementById("minutes").innerHTML=String(m).padStart(2,"0");

    document.getElementById("seconds").innerHTML=String(s).padStart(2,"0");

}

countdown();

setInterval(countdown,1000);
