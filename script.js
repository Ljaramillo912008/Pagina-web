const preguntasYRespuestas = [
    { pregunta: "¿Es una etiqueta de encabezado?", respuesta: "h1" },
    { pregunta: "¿Es una etiqueta de encabezado?", respuesta: "h2" },
    { pregunta: "¿Es una etiqueta de encabezado?", respuesta: "h3" },
    { pregunta: "¿Es una etiqueta de encabezado?", respuesta: "h4" },
    { pregunta: "¿Es una etiqueta de encabezado?", respuesta: "h5" },
    { pregunta: "¿Es una etiqueta de encabezado?", respuesta: "h6" },
    { pregunta: "¿Es una etiqueta para párrafos de texto?", respuesta: "p" },
    { pregunta: "¿Es una etiqueta para texto preformateado?", respuesta: "pre" },
    { pregunta: "¿Es una etiqueta para mostrar código?", respuesta: "code" },
    { pregunta: "¿Es una etiqueta para imágenes?", respuesta: "img" },
    { pregunta: "¿Es una etiqueta para enlaces?", respuesta: "a" },
    { pregunta: "¿Es una etiqueta para listas no ordenadas?", respuesta: "ul" },
    { pregunta: "¿Es una etiqueta para listas ordenadas?", respuesta: "ol" },
    { pregunta: "¿Es una etiqueta para un elemento de lista?", respuesta: "li" },
    { pregunta: "¿Es una etiqueta para tablas?", respuesta: "table" },
    { pregunta: "¿Es una etiqueta para una fila de tabla?", respuesta: "tr" },
    { pregunta: "¿Es una etiqueta para una celda de tabla?", respuesta: "td" },
    { pregunta: "¿Es una etiqueta para un contenedor genérico?", respuesta: "div" },
    { pregunta: "¿Es una etiqueta para un texto en línea?", respuesta: "span" },
    { pregunta: "¿Es una etiqueta para botones?", respuesta: "button" },
    { pregunta: "¿Es una etiqueta para formularios?", respuesta: "form" }
];

let preguntaActual;
let intentosRestantes;

const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const verificarButton = document.getElementById("verificar");
const resultadoElement = document.getElementById("resultado");

function inicializarJuego() {
    preguntaActual = preguntasYRespuestas[Math.floor(Math.random() * preguntasYRespuestas.length)];
    intentosRestantes = 3; // Cambiar a 3 intentos para hacer el juego un poco más fácil.
    generarPregunta();
    resultadoElement.textContent = "";
    resultadoElement.classList.remove("incorrecto");
    respuestaElement.value = "";
    verificarButton.disabled = false;
}

function generarPregunta() {
    preguntaElement.textContent = preguntaActual.pregunta;
}

function verificarRespuesta() {
    const respuesta = respuestaElement.value.trim().toLowerCase();

    if (respuesta === preguntaActual.respuesta) {
        resultadoElement.textContent = "¡Correcto! La etiqueta era <" + preguntaActual.respuesta + ">.";
        resultadoElement.classList.remove("incorrecto");
        verificarButton.disabled = true;
    } else {
        intentosRestantes--;
        resultadoElement.textContent = `Incorrecto. Te quedan ${intentosRestantes} intentos.`;
        resultadoElement.classList.add("incorrecto");

        if (intentosRestantes === 0) {
            resultadoElement.textContent = "¡Has perdido! La etiqueta era <" + preguntaActual.respuesta + ">.";
            verificarButton.disabled = true;
        }
    }

    respuestaElement.value = "";
}

inicializarJuego();
verificarButton.addEventListener("click", verificarRespuesta);
