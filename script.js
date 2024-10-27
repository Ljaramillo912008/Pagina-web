const etiquetas = [
    "h1", "h2", "h3", "h4", "h5", "h6",
    "p", "pre", "code",
    "img", "a",
    "ul", "ol", "li",
    "table", "tr", "td",
    "div", "span",
    "button", "form", "input", "label", "select", "option",
];

let etiquetaAleatoria;
let intentosRestantes;

const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const verificarButton = document.getElementById("verificar");
const resultadoElement = document.getElementById("resultado");

function inicializarJuego() {
    etiquetaAleatoria = etiquetas[Math.floor(Math.random() * etiquetas.length)];
    intentosRestantes = 7;
    generarPregunta();
    resultadoElement.textContent = "";
    resultadoElement.classList.remove("incorrecto");
    respuestaElement.value = "";
    verificarButton.disabled = false;
}

function generarPregunta() {
    let pregunta = "";
    switch (etiquetaAleatoria) {
        case "h1": case "h2": case "h3": case "h4": case "h5": case "h6":
            pregunta = "¿Es una etiqueta de encabezado?";
            break;
        case "p": case "pre": case "code":
            pregunta = "¿Es una etiqueta para texto o código?";
            break;
        case "img":
            pregunta = "¿Es una etiqueta para insertar imágenes?";
            break;
        case "a":
            pregunta = "¿Es una etiqueta para enlaces?";
            break;
        case "ul": case "ol": case "li":
            pregunta = "¿Es una etiqueta para listas?";
            break;
        case "table": case "tr": case "td":
            pregunta = "¿Es una etiqueta de tabla?";
            break;
        case "div": case "span":
            pregunta = "¿Es una etiqueta para contenedores genéricos?";
            break;
        case "button": case "form": case "input": case "label": case "select": case "option":
            pregunta = "¿Es una etiqueta de formulario?";
            break;
        default:
            pregunta = "¿Es una etiqueta HTML común?";
    }
    preguntaElement.textContent = pregunta;
}

function verificarRespuesta() {
    const respuesta = respuestaElement.value.trim().toLowerCase();

    if (respuesta === etiquetaAleatoria) {
        resultadoElement.textContent = "¡Correcto! La etiqueta era <" + etiquetaAleatoria + ">.";
        resultadoElement.classList.remove("incorrecto");
        verificarButton.disabled = true;
    } else {
        intentosRestantes--;
        resultadoElement.textContent = `Incorrecto. Te quedan ${intentosRestantes} intentos.`;
        resultadoElement.classList.add("incorrecto");

        if (intentosRestantes === 0) {
            resultadoElement.textContent = "¡Has perdido! La etiqueta era <" + etiquetaAleatoria + ">.";
            verificarButton.disabled = true;
        }
    }

    respuestaElement.value = "";
}

inicializarJuego();
verificarButton.addEventListener("click", verificarRespuesta);
