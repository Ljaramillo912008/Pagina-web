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
    { pregunta: "¿Es una etiqueta para texto en línea?", respuesta: "span" },
    { pregunta: "¿Es una etiqueta para botones?", respuesta: "button" },
    { pregunta: "¿Es una etiqueta para formularios?", respuesta: "form" },
    { pregunta: "¿Es una etiqueta para definir un área de texto?", respuesta: "textarea" },
    { pregunta: "¿Es una etiqueta para definir un menú de navegación?", respuesta: "nav" },
    { pregunta: "¿Es una etiqueta para una sección de contenido?", respuesta: "section" },
    { pregunta: "¿Es una etiqueta para definir un encabezado de sección?", respuesta: "header" },
    { pregunta: "¿Es una etiqueta para definir un pie de página?", respuesta: "footer" },
    { pregunta: "¿Es una etiqueta para incluir scripts en el HTML?", respuesta: "script" },
    { pregunta: "¿Es una etiqueta para incluir hojas de estilo?", respuesta: "link" },
    { pregunta: "¿Es una etiqueta para definir una figura y su leyenda?", respuesta: "figure" },
    { pregunta: "¿Es una etiqueta para crear un cuadro de diálogo?", respuesta: "dialog" },
];

let preguntaActual;
let intentosRestantes;
let puntuacion = 0;
let nivel = 1;

const preguntaElement = document.getElementById("pregunta");
const respuestaElement = document.getElementById("respuesta");
const verificarButton = document.getElementById("verificar");
const reiniciarButton = document.getElementById("reiniciar");
const resultadoElement = document.getElementById("resultado");
const puntuacionElement = document.getElementById("puntuacion");
const nivelElement = document.getElementById("nivel");

function inicializarJuego() {
    preguntaActual = preguntasYRespuestas[Math.floor(Math.random() * preguntasYRespuestas.length)];
    intentosRestantes = 3; // Cambiar a 3 intentos para hacer el juego un poco más fácil.
    generarPregunta();
    resultadoElement.textContent = "";
    resultadoElement.classList.remove("incorrecto");
    respuestaElement.value = "";
    verificarButton.disabled = false;
    reiniciarButton.style.display = "none";
}

function generarPregunta() {
    preguntaElement.textContent = preguntaActual.pregunta;
}

function verificarRespuesta() {
    const respuesta = respuestaElement.value.trim().toLowerCase();

    if (respuesta === preguntaActual.respuesta) {
        puntuacion += 10; // Sumar 10 puntos por respuesta correcta
        resultadoElement.textContent = "¡Correcto! La etiqueta era <" + preguntaActual.respuesta + ">.";
        resultadoElement.classList.remove("incorrecto");
    } else {
        intentosRestantes--;
        resultadoElement.textContent = `Incorrecto. Te quedan ${intentosRestantes} intentos.`;
        resultadoElement.classList.add("incorrecto");

        if (intentosRestantes === 0) {
            resultadoElement.textContent = "¡Has perdido! La etiqueta era <" + preguntaActual.respuesta + ">.";
            verificarButton.disabled = true;
            reiniciarButton.style.display = "block";
        }
    }

    actualizarPuntuacion();
    respuestaElement.value = "";
}

function actualizarPuntuacion() {
    puntuacionElement.textContent = "Puntuación: " + puntuacion;

    // Aumentar el nivel cada 30 puntos
    if (puntuacion % 30 === 0 && puntuacion !== 0) {
        nivel++;
        nivelElement.textContent = "Nivel: " + nivel;
    }

    // Reiniciar el juego si se alcanza un nivel superior
    if (nivel > 5) {
        resultadoElement.textContent = "¡Felicidades! Has alcanzado el nivel máximo.";
        verificarButton.disabled = true;
        reiniciarButton.style.display = "block";
    }
}

// Reiniciar el juego
reiniciarButton.addEventListener("click", inicializarJuego);
verificarButton.addEventListener("click", verificarRespuesta);

// Inicializar el juego al cargar la página
window.onload = inicializarJuego;
