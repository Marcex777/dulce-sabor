const carrito = [];
const ivaPorcentaje = 0.15;

document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('lista-carrito'); // UL para mostrar items
  const subtotalEl = document.getElementById('subtotal');
  const ivaEl = document.getElementById('iva');
  const totalEl = document.getElementById('total');
  const btnpedido = document.getElementById('realizar-pedido'); // Botón de pedido

  // Escuchar los botones de productos 
  document.querySelectorAll('.producto button').forEach((btn) => {
    btn.addEventListener('click', () => {
      const producto = btn.closest('.producto');
      const nombre = producto.querySelector('h3').textContent;
      const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));

      carrito.push({ nombre, precio });
      actualizarCarrito();
    });
  });

  // Botón de "Realizar Pedido"
  btnpedido.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío.');
      return;
    }
    alert('Gracias por su pedido 🧡');
    carrito.length = 0;
    actualizarCarrito();
  });

  // Función para actualizar el carrito y los totales
  function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let subtotal = 0;

    carrito.forEach(item => {
      subtotal += item.precio;
      const li = document.createElement('li');
      li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
      listaCarrito.appendChild(li);
    });

    const iva = subtotal * ivaPorcentaje;
    const total = subtotal + iva;

    subtotalEl.textContent = subtotal.toFixed(2);
    ivaEl.textContent = iva.toFixed(2);
    totalEl.textContent = total.toFixed(2);
  }
});
