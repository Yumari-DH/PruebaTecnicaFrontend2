// Arreglo de preguntas
const preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Madrid", "París", "Roma", "Berlín"],
        respuestaCorrecta: 1 // París
    },
    {
        pregunta: "¿Qué lenguaje se ejecuta en los navegadores web?",
        opciones: ["Java", "C", "Python", "JavaScript"],
        respuestaCorrecta: 3 // JavaScript
    },
    {
        pregunta: "¿Qué significa HTML?",
        opciones: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Hyper Transfer Markup Language",
            "Home Tool Markup Language"
        ],
        respuestaCorrecta: 0 // Hyper Text Markup Language
    }

];//arreglo preguntas

const preguntaN = document.getElementById("preguntaN");
const espacioRadios = document.getElementById("espacioRadios");
const instrucciones = document.getElementById("instrucciones");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

let preguntaActual = 0; //empezamos con la pregunta 1 (indice 0 del array)

//función para agregar cada pregunta y sus opciones al html
function mostrarPregunta(preguntaActual) {

    //1. para insertar la pregunta:
    preguntaN.textContent = preguntas[preguntaActual].pregunta;

    //2. para insertar las opciones:
    //primero limpiamos lo anterior:
    espacioRadios.innerHTML = "";

    //después recorrer cada una de las opciones de la pregunta actual para insertarlas:
    let opciones = preguntas[preguntaActual].opciones //arreglo de opciones
    opciones.forEach(element => {
        espacioRadios.insertAdjacentHTML("beforeend", `<div class="form-check d-flex justify-content-center align-items-center mb-2">
                            <input class="form-check-input me-2" type="radio" name="radioDefault" id="radio1">
                            <label class="form-check-label" for="radioDefault1">
                                ${element}
                            </label>
                        </div>`)
    });
}//función mostrarPregunta

mostrarPregunta(preguntaActual); //de inicio muestra la pregunta 1
instrucciones.innerText = `Este es un cuestionario de ${preguntas.length} preguntas, puedes navegar entre las preguntas
                            sin perder la respuesta seleccionada. Pregunta 1 de ${preguntas.length}`;

btnSiguiente.addEventListener("click", function (event) {
    event.preventDefault();
    preguntaActual++

    if (preguntaActual >= preguntas.length-1) {
        preguntaActual = preguntas.length-1;
    }
        mostrarPregunta(preguntaActual);
    
    instrucciones.innerText = `Este es un cuestionario de ${preguntas.length} preguntas, puedes navegar entre las preguntas
                            sin perder la respuesta seleccionada. Pregunta ${preguntaActual+1} de ${preguntas.length}`;

});//btnSiguiente

btnAnterior.addEventListener("click", function (event) {
    event.preventDefault();

    if (preguntaActual <= 0) {
        preguntaActual = 0;
    } else {
        preguntaActual--
        mostrarPregunta(preguntaActual);
    }//if-else

    instrucciones.innerText = `Este es un cuestionario de ${preguntas.length} preguntas, puedes navegar entre las preguntas
                            sin perder la respuesta seleccionada. Pregunta ${preguntaActual+1} de ${preguntas.length}`;
});//btnAnterior

console.log("Elemento instrucciones:", instrucciones);