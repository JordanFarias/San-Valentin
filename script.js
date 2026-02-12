
/* splash */
const splash = document.getElementById("splash");
const mensajePrincipal = document.getElementById("mensaje_principal");

// Ocultamos el mensaje principal al inicio
mensajePrincipal.style.display = "none";

splash.addEventListener("click", function () {
    splash.style.display = "none";
    mensajePrincipal.style.display = "block";
});






/*Contador*/
const fechaInicio = new Date(2025, 4, 20, 10, 33, 0);

const elementoTiempo = document.getElementById("contador");

function actualizarContador() {
    const ahora = new Date();

    let años = ahora.getFullYear() - fechaInicio.getFullYear();
    let meses = ahora.getMonth() - fechaInicio.getMonth();
    let dias = ahora.getDate() - fechaInicio.getDate();
    let horas = ahora.getHours() - fechaInicio.getHours();
    let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
    let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }

    if (minutos < 0) {
        minutos += 60;
        horas--;
    }

    if (horas < 0) {
        horas += 24;
        dias--;
    }

    if (dias < 0) {
        const mesAnterior = new Date(ahora.getFullYear(), ahora.getMonth(), 0);
        dias += mesAnterior.getDate();
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        años--;
    }

    let texto = "";

    if (años > 0) {
        texto += `${años} años `;
    }

    texto += `${meses} meses ${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;

    elementoTiempo.textContent = texto;
}

actualizarContador();
setInterval(actualizarContador, 1000);

/* Botones */
const btnSi = document.getElementById("btn_si");
const btnNo = document.getElementById("btn_no");
const mensajeSanValentin = document.getElementById("mensaje_sanvalentin");

let tamañoSi = 1;
let tamañoNo = 1;
let contadorClicksNo = 0;

btnNo.addEventListener("click", function () {
    contadorClicksNo++;

    // Cada click agranda Si y achica No
    tamañoSi += 0.2;
    tamañoNo -= 0.15;

    btnSi.style.transform = `scale(${tamañoSi})`;
    btnNo.style.transform = `scale(${tamañoNo})`;

    // Intercambiar posición al tercer click
    if (contadorClicksNo === 3) {
        const padre = btnNo.parentNode;
        padre.insertBefore(btnNo, btnSi);
    }

    // Desaparece al cuarto click
    if (contadorClicksNo >= 4) {
        btnNo.style.display = "none";
    }
});

btnSi.addEventListener("click", function () {
    // Cambiar todo el contenido de la sección
    mensajeSanValentin.innerHTML = `
        <h1>Te amo mucho 💗💗 </h1>
        <p>Sabía que ibas a decir que sí </p>
    `;

    // Opcional: centrar y dar estilo
    mensajeSanValentin.style.textAlign = "center";
});

