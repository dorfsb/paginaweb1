// Obtener los elementos del DOM
const colorPicker = document.getElementById('colorPicker');
const buttons = document.querySelectorAll('button[data-color]'); // Selecciona todos los botones con el atributo data-color
const body = document.body; // El elemento body

// Función para cambiar el color de fondo
function cambiarColorFondo(color) {
    body.style.backgroundColor = color;
}

// Event Listener para el input de color
colorPicker.addEventListener('input', (event) => {
    // El valor del input de color es el color seleccionado
    const selectedColor = event.target.value;
    cambiarColorFondo(selectedColor);
});

// Event Listeners para los botones
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtener el color del atributo 'data-color' del botón
        const colorDeBoton = button.dataset.color; // Accede al valor del atributo data-color
        cambiarColorFondo(colorDeBoton);
    });
});