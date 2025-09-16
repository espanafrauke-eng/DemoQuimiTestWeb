// Mostrar/Ocultar teoría
const btnTeoria = document.getElementById("btnTeoria");
const contenidoTeoria = document.getElementById("contenidoTeoria");

btnTeoria.addEventListener("click", () => {
    if (contenidoTeoria.style.display === "none") {
        contenidoTeoria.style.display = "block";
        btnTeoria.textContent = "Ocultar Teoría";
    } else {
        contenidoTeoria.style.display = "none";
        btnTeoria.textContent = "Mostrar Teoría";
    }
});

// Cuestionario avanzado
const preguntas = [
    {
        pregunta: "Un ejemplo de mezcla homogenea es:",
        opciones: ["Cerveza", "Humo", "Aire"],
        correcta: 2
    },
    {
        pregunta: "¿Cuál es el símbolo del agua?",
        opciones: ["H2O", "CO2", "O2"],
        correcta: 0
    },
    {
        pregunta: "Una propiedad extensiva es:",
        opciones: ["Densidad", "Presion", "Dureza"],
        correcta: 1
    }
];

let indicePregunta = 0;
const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const feedback = document.getElementById("feedback");
const btnSiguiente = document.getElementById("btnSiguiente");

function mostrarPregunta() {
    feedback.textContent = "";
    btnSiguiente.style.display = "none";
    opcionesEl.innerHTML = "";

    let p = preguntas[indicePregunta];
    preguntaEl.textContent = p.pregunta;

    p.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.textContent = opcion;
        btn.addEventListener("click", () => {
            if (index === p.correcta) {
                feedback.textContent = "¡Correcto!";
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Incorrecto. Intenta de nuevo.";
                feedback.style.color = "red";
            }
            btnSiguiente.style.display = "inline-block";
        });
        opcionesEl.appendChild(btn);
    });
}

btnSiguiente.addEventListener("click", () => {
    indicePregunta++;
    if (indicePregunta >= preguntas.length) {
        preguntaEl.textContent = "¡Has completado el cuestionario!";
        opcionesEl.innerHTML = "";
        btnSiguiente.style.display = "none";
        feedback.textContent = "";
    } else {
        mostrarPregunta();
    }
});

// Mostrar primera pregunta al cargar la página
mostrarPregunta();