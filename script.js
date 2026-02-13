/* --- SPLASH SCREEN --- */
const splash = document.getElementById("splash");

// Al hacer click en cualquier parte del splash
splash.addEventListener("click", () => {
    splash.style.opacity = "0"; // Desvanecer
    setTimeout(() => {
        splash.style.display = "none"; // Quitar del flujo después de la animación
    }, 800); // Espera a que termine la transición de 0.8s del CSS
});

/* --- CONTADOR --- */
// FECHA: Año, Mes (0=Enero, 4=Mayo), Día, Hora, Minutos
const fechaInicio = new Date(2025, 4, 20, 10, 33, 0);
const elementoTiempo = document.getElementById("contador");

function actualizarContador() {
    const ahora = new Date();

    // Cálculos de tiempo
    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    // Ajustes negativos
    if (segundos < 0) { segundos += 60; minutos--; }
    if (minutos < 0) { minutos += 60; horas--; }
    if (horas < 0) { horas += 24; dias--; }
    if (dias < 0) {
        const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }
    if (meses < 0) { meses += 12; años--; }

    // Formateo del texto
    let texto = "";
    if (años > 0) texto += `${años} años, `;

    // Usamos saltos de línea <br> para que se vea ordenado en móviles
    texto += `${meses} meses, ${dias} días<br>`;
    texto += `${horas} horas, ${minutos} min, ${segundos} seg`;

    elementoTiempo.innerHTML = texto; // Usamos innerHTML para que lea el <br>
}

setInterval(actualizarContador, 1000);
actualizarContador(); // Ejecutar inmediatamente

/* --- BOTONES  --- */
const btnSi = document.getElementById("btn_si");
const btnNo = document.getElementById("btn_no");
const mensajeSanValentin = document.getElementById("mensaje_sanvalentin");
const cardPregunta = document.querySelector(".card-pregunta");

let tamañoSi = 1;
let tamañoNo = 1;
let contadorClicksNo = 0;

btnNo.addEventListener("click", () => {
    contadorClicksNo++;

    // Agrandar el SI y achicar el NO
    tamañoSi += 0.4; // Crece más rápido
    tamañoNo -= 0.1;

    btnSi.style.transform = `scale(${tamañoSi})`;
    btnNo.style.transform = `scale(${tamañoNo})`;

    // Al tercer intento, intercambiamos los botones de lugar
    if (contadorClicksNo === 3) {
        const contenedorBotones = document.querySelector(".botones");
        contenedorBotones.style.flexDirection = "row-reverse"; // Truco CSS para cambiar orden visual
    }

    // Si insiste mucho, desaparece el NO
    if (contadorClicksNo >= 5) {
        btnNo.style.display = "none";
    }
});

btnSi.addEventListener("click", () => {
    // Confetti o mensaje final
    cardPregunta.innerHTML = `
        <h1 style="color: #c0392b; font-size: 3rem;">Te Amo 💗</h1>
        <p style="font-size: 1.2rem;">Sabía que ibas a decir que si.</p>
        <img src="img/final.webp" style="width: 200px; border-radius: 10px; margin-top: 20px; box-shadow: 0 10px 20px rgba(0,0,0,0.1);">
    `;

    // Un pequeño efecto de celebración (opcional si quieres hacerlo simple)
    document.body.style.overflow = "hidden";
});