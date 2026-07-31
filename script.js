/*=========================================
  FUENTES Y VARIABLES
=========================================*/

:root{

--bg1:#dfeaf8;
--bg2:#c9dcf5;
--bg3:#8eaed8;

--gold:#c9a646;

--text:#2d3d56;

--white:#ffffff;

--glass:rgba(255,255,255,.30);

--shadow:0 25px 60px rgba(0,0,0,.12);

}

*{

margin:0;
padding:0;
box-sizing:border-box;

}

html{

scroll-behavior:smooth;

}

body{

font-family:'Cormorant Garamond',serif;

background:
linear-gradient(180deg,var(--bg1),var(--bg2),var(--bg3));

color:var(--text);

overflow-x:hidden;

}

/*=========================================
GLITTER
=========================================*/

#glitter{

position:fixed;

left:0;
top:0;

width:100%;
height:100%;

pointer-events:none;

z-index:1;

overflow:hidden;

}

.sparkle{

position:absolute;

width:4px;

height:4px;

border-radius:50%;

background:white;

opacity:.9;

animation:fall linear infinite;

filter:blur(.5px);

}

@keyframes fall{

0%{

transform:translateY(-20px);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(110vh);

opacity:0;

}

}

/*=========================================
SOBRE
=========================================*/

#cover{

height:100vh;

display:flex;

justify-content:center;

align-items:center;

position:relative;

background:linear-gradient(180deg,#dfeaf8,#b8d0f1);

}

.overlay{

position:absolute;

inset:0;

background:rgba(255,255,255,.18);

backdrop-filter:blur(4px);

}

.envelope-container{

position:relative;

z-index:10;

}

#envelope{

width:340px;

height:230px;

position:relative;

cursor:pointer;

transition:.5s;

}

#envelope:hover{

transform:scale(1.05);

}

.envelope-body{

position:absolute;

bottom:0;

width:100%;

height:100%;

background:white;

border-radius:10px;

box-shadow:var(--shadow);

}

.envelope-top{

position:absolute;

top:0;

width:100%;

height:100%;

background:#edf3fb;

clip-path:polygon(0 0,50% 58%,100% 0,100% 0,100% 100%,0 100%);

border-radius:10px;

}

.letter{

position:absolute;

left:50%;

top:50%;

transform:translate(-50%,-50%);

background:white;

width:82%;

padding:25px;

border-radius:12px;

text-align:center;

box-shadow:0 10px 25px rgba(0,0,0,.08);

transition:.7s;

}

.letter h1{

font-size:70px;

color:var(--gold);

}

.letter h2{

font-family:'Great Vibes',cursive;

font-size:52px;

margin:5px 0;

}

.letter p{

font-family:Montserrat,sans-serif;

letter-spacing:2px;

font-size:13px;

margin-top:10px;

}
/*=========================================
HERO
=========================================*/

#invitation{
    display:none;
    position:relative;
    z-index:2;
}

.hero{
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:60px 20px;
    position:relative;
    overflow:hidden;
}

.xv-background{
    position:absolute;
    font-size:340px;
    font-weight:700;
    color:rgba(255,255,255,.30);
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    z-index:0;
    user-select:none;
}

.hero-content{
    position:relative;
    z-index:2;
    max-width:850px;
    text-align:center;
}

.hero-content h2{
    font-size:28px;
    letter-spacing:8px;
    text-transform:uppercase;
    color:#6d83a3;
    font-family:'Montserrat',sans-serif;
}

.hero-content h1{
    font-family:'Great Vibes',cursive;
    font-size:110px;
    color:#49688f;
    margin:10px 0;
}

.hero-content h3{
    font-size:38px;
    font-weight:400;
    letter-spacing:2px;
    margin-bottom:30px;
}

.hero-content p{
    max-width:700px;
    margin:auto;
    line-height:1.9;
    font-size:24px;
}

.divider{
    width:120px;
    height:2px;
    background:linear-gradient(to right,transparent,var(--gold),transparent);
    margin:30px auto;
}

.date-box{
    width:220px;
    margin:45px auto;
    padding:25px;
    border-radius:22px;
    background:rgba(255,255,255,.35);
    backdrop-filter:blur(14px);
    box-shadow:var(--shadow);
}

.date-box h2{
    font-size:70px;
    color:var(--gold);
    letter-spacing:0;
}

.date-box h4,
.date-box h5{
    font-family:'Montserrat',sans-serif;
    font-weight:500;
}

/*=========================================
SECCIONES
=========================================*/

.glass{

width:min(900px,92%);

margin:60px auto;

padding:50px;

border-radius:28px;

background:rgba(255,255,255,.35);

backdrop-filter:blur(16px);

box-shadow:var(--shadow);

text-align:center;

}

.glass h2{

font-family:'Great Vibes',cursive;

font-size:62px;

color:#49688f;

margin-bottom:15px;

}

.parents{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(260px,1fr));

gap:25px;

margin-top:30px;

}

.parents div{

padding:30px;

border-radius:18px;

background:rgba(255,255,255,.40);

}

.parents h3{

font-size:30px;

margin-bottom:8px;

}

.parents p{

font-family:'Montserrat',sans-serif;

letter-spacing:2px;

color:#6b7b92;

}

/*=========================================
CONTADOR
=========================================*/

.countdown{

display:grid;

grid-template-columns:repeat(4,1fr);

gap:20px;

margin-top:40px;

}

.countdown div{

padding:25px;

border-radius:20px;

background:rgba(255,255,255,.45);

}

.countdown span{

display:block;

font-size:55px;

font-weight:bold;

color:#49688f;

}

.countdown small{

font-family:'Montserrat',sans-serif;

text-transform:uppercase;

letter-spacing:2px;

}
/*=========================================
EVENTOS
=========================================*/

.event-card{

max-width:650px;

margin:40px auto 0;

padding:35px;

border-radius:22px;

background:rgba(255,255,255,.45);

box-shadow:var(--shadow);

}

.event-icon{

font-size:55px;

margin-bottom:20px;

}

.event-card h3{

font-size:34px;

color:#49688f;

margin-bottom:20px;

}

.event-card p{

font-size:22px;

line-height:1.8;

margin-bottom:10px;

}

/*=========================================
DRESS CODE
=========================================*/

.dress h1{

font-size:70px;

margin-bottom:15px;

}

.dress h3{

font-size:34px;

color:#49688f;

margin-bottom:15px;

}

.dress p{

font-size:22px;

}

/*=========================================
BOTONES
=========================================*/

.btn,
#musicButton{

display:inline-block;

margin-top:30px;

padding:16px 40px;

border:none;

border-radius:50px;

background:linear-gradient(135deg,#7d9bc6,#4f6f98);

color:#fff;

font-family:'Montserrat',sans-serif;

font-size:16px;

font-weight:600;

text-decoration:none;

cursor:pointer;

transition:.35s;

box-shadow:0 12px 30px rgba(79,111,152,.25);

}

.btn:hover,
#musicButton:hover{

transform:translateY(-4px);

box-shadow:0 18px 35px rgba(79,111,152,.35);

}

.whatsapp{

background:linear-gradient(135deg,#25D366,#128C7E);

}

/*=========================================
LLUVIA DE SOBRES
=========================================*/

#giftBox{

max-width:520px;

margin:40px auto;

padding:35px;

border-radius:24px;

background:rgba(255,255,255,.45);

box-shadow:var(--shadow);

transition:.4s;

}

#giftBox:hover{

transform:translateY(-6px);

}

#giftBox h1{

font-size:70px;

margin-bottom:15px;

}

#giftBox p{

font-size:22px;

line-height:1.8;

}

/*=========================================
FOOTER
=========================================*/

footer{

padding:80px 20px;

text-align:center;

}

footer p{

font-size:24px;

margin-bottom:20px;

}

footer h2{

font-family:'Great Vibes',cursive;

font-size:70px;

color:#49688f;

}

/*=========================================
RESPONSIVE
=========================================*/

@media (max-width:768px){

.hero-content h1{

font-size:72px;

}

.hero-content h3{

font-size:26px;

}

.hero-content p{

font-size:20px;

}

.xv-background{

font-size:180px;

}

.glass{

padding:30px 20px;

}

.glass h2{

font-size:46px;

}

.countdown{

grid-template-columns:repeat(2,1fr);

}

.countdown span{

font-size:42px;

}

.event-card h3{

font-size:28px;

}

.event-card p{

font-size:18px;

}

#envelope{

width:280px;

height:190px;

}

.letter h1{

font-size:55px;

}

.letter h2{

font-size:42px;

}

}
