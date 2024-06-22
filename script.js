const etiquetas = [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "pre", "code",
    "img",
    "a",
    "ul", "ol", "li",
    "table", "tr", "td",
    "div",
    "span",
];

let etiquetaAleatoria = etiquetas[Math.floor(Math.random() * etiquetas.length)];
let intentosRestantes = 7;

const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const verificarButton = document.getElementById("verificar");
const resultadoElement = document.getElementById("resultado");

function generarPregunta() {
    const caracteristica = Math.floor(Math.random() * 3);
    switch (caracteristica) {
        case 0:
            preguntaElement.textContent = `¿Es una etiqueta para crear texto de nivel ${etiquetaAleatoria}?`;
            break;
        case 1:
            preguntaElement.textContent = `¿Es una etiqueta para insertar contenido multimedia?`;
            break;
        case 2:
            preguntaElement.textContent = `¿Es una etiqueta para crear una lista?`;
            break;
    }
}

function verificarRespuesta() {
    const respuesta = respuestaElement.value.toLowerCase();

    if (respuesta === etiquetaAleatoria) {
        resultadoElement.textContent = "¡Correcto! La etiqueta era <" + etiquetaAleatoria + ">.";
        verificarButton.disabled = true;
    } else {
        intentosRestantes--;
        resultadoElement.textContent = `Incorrecto. Te quedan ${intentosRestantes} intentos.`;

        if (intentosRestantes === 0) {
            resultadoElement.textContent = "¡Has perdido! La etiqueta era <" + etiquetaAleatoria + ">.";
            verificarButton.disabled = true;
        }
    }

    respuestaElement.value = "";
}

generarPregunta();

verificarButton.addEventListener("click", verificarRespuesta);


