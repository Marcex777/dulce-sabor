// Parte de Marcelo Rodriguez
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form');
  const popup = document.getElementById('Vemergente');
  const mensaje = document.getElementById('mensaje-popup');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const tipo = document.getElementById('tipo').value.trim();
    const comentarios = document.getElementById('comentarios').value.trim();

    mensaje.innerHTML = `
      <span style="font-size:1.1em; color:#6e3f99; font-weight:bold;">¡Estos datos se cocinaron y endulzaron correctamente!</span><br><br>
      <strong>Nombre:</strong> ${nombre}<br>
      <strong>Email:</strong> ${email}<br>
      <strong>Tipo de pastel:</strong> ${tipo}<br>
      <strong>Comentarios:</strong> ${comentarios}<br>
    `;

    popup.style.display = 'block';
  });
});
