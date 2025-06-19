const carrito = [];
const ivaPorcentaje = 0.15;

document.addEventListener('DOMContentLoaded', () => {
  const listaCarrito = document.getElementById('lista-carrito');
  const subtotalEl = document.getElementById('subtotal');
  const ivaEl = document.getElementById('iva');
  const totalEl = document.getElementById('total');
  const btnPedido = document.getElementById('realizar-pedido');

  // Agregar productos al carrito
  document.querySelectorAll('.btn-comprar').forEach((btn) => {
    btn.addEventListener('click', () => {
      const producto = btn.closest('.producto');
      const nombre = producto.querySelector('h3').textContent;
      const precio = parseFloat(producto.querySelector('.precio').textContent.replace('$', ''));

      // Verificar si ya está en el carrito
      const itemExistente = carrito.find(item => item.nombre === nombre);
      if (itemExistente) {
        itemExistente.cantidad += 1;
        itemExistente.precioTotal += precio;
      } else {
        carrito.push({
          nombre,
          precioUnitario: precio,
          precioTotal: precio,
          cantidad: 1
        });
      }

      actualizarCarrito();
    });
  });

  // Eliminar productos del carrito (delegado)
  listaCarrito.addEventListener('click', (e) => {
    if (e.target.classList.contains('eliminar')) {
      const nombre = e.target.dataset.nombre;
      const index = carrito.findIndex(item => item.nombre === nombre);
      if (index !== -1) {
        carrito.splice(index, 1);
        actualizarCarrito();
      }
    }
  });

  btnPedido.addEventListener('click', () => {
    if (carrito.length === 0) {
      alert('El carrito está vacío...');
      return;
    }
    alert('¡Gracias por su compra❤️!');
    carrito.length = 0;
    actualizarCarrito();
  });

  function actualizarCarrito() {
    listaCarrito.innerHTML = '';
    let subtotal = 0;

    carrito.forEach(item => {
      subtotal += item.precioTotal;
      const li = document.createElement('li');
      li.innerHTML = `
        ${item.nombre} x${item.cantidad} - $${item.precioTotal.toFixed(2)}
        <button class="eliminar" data-nombre="${item.nombre}" style="margin-left: 10px; color: red; border: none; background: transparent; cursor: pointer;">❌</button>
      `;
      listaCarrito.appendChild(li);
    });

    const iva = subtotal * ivaPorcentaje;
    const total = subtotal + iva;

    subtotalEl.textContent = subtotal.toFixed(2);
    ivaEl.textContent = iva.toFixed(2);
    totalEl.textContent = total.toFixed(2);
  }
});
