document.addEventListener("DOMContentLoaded", function () {
  const parrafos = document.querySelectorAll('.texto-noticia');

  parrafos.forEach(p => {
    const length = p.innerText.length;

    // Ajuste proporcional fino para textos largos
    if (length >= 1000) {
      p.style.fontSize = '55%';
    } else if (length >= 900) {
      p.style.fontSize = '60%';
    } else if (length >= 800) {
      p.style.fontSize = '65%';
    } else if (length >= 700) {
      p.style.fontSize = '70%';
    } else {
      p.style.fontSize = '75%';
    }

    // Asegurar visibilidad completa del texto
    p.style.overflow = 'visible';
    p.style.maxHeight = 'none';
  });
});
