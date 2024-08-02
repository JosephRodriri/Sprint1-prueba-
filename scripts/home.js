// selecciona el elemento que deseas animar
const elemento = document.querySelector('circle');
console.log (elemento)
function actualizarProgreso(porcentaje) {
    console.log (elemento)

  const dashOffset = 165.2;
  console.log (elemento)

  // establece el valor de stroke-dashoffset en el elemento
  elemento.style.strokeDashoffset = dashOffset;
  console.log (elemento)

}

// ejemplo de uso
actualizarProgreso(50); // establece el progreso en 50%