document.addEventListener('DOMContentLoaded', () => {

    const botonComprar = document.querySelector('.bt1');

    if (botonComprar) {
        botonComprar.addEventListener('click', (event) => {
            alert('¡Gracias por tu interés en el Combo PC Gamer! Te redirigiremos a los detalles del producto.');
        });
    }

});

document.addEventListener('DOMContentLoaded', () => {
  const btnTheme = document.getElementById('btn-theme');

  if (btnTheme) {
    btnTheme.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');

      // Alterna únicamente el icono entre luna y sol
      if (document.body.classList.contains('light-mode')) {
        btnTheme.textContent = '☀️';
      } else {
        btnTheme.textContent = '🌙';
      }
    });
  }
});