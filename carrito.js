document.addEventListener("DOMContentLoaded", () => {
  const carrito = {};
  const botonesComprar = document.querySelectorAll(".btn-comprar");
  const listaProductos = document.getElementById("listaProductos");
  const subtotalElem = document.getElementById("subtotal");
  const ivaElem = document.getElementById("iva");
  const totalElem = document.getElementById("total");
  const btnComprar = document.getElementById("btnComprar");

  botonesComprar.forEach(boton => {
    boton.addEventListener("click", () => {
      const producto = boton.closest(".producto");
      const nombre = producto.dataset.nombre;
      const precio = parseFloat(producto.dataset.precio);

      if (carrito[nombre]) {
        carrito[nombre].cantidad++;
      } else {
        carrito[nombre] = { precio, cantidad: 1 };
      }
      actualizarCarrito();
    });
  });

  function actualizarCarrito() {
    listaProductos.innerHTML = "";
    let subtotal = 0;

    for (const nombre in carrito) {
      const item = carrito[nombre];
      const totalItem = item.precio * item.cantidad;
      subtotal += totalItem;

      const div = document.createElement("div");
      div.classList.add("carrito-producto");

      div.innerHTML = `
        <div>${nombre}</div>
        <div class="cantidad">x${item.cantidad}</div>
        <div class="precio">$${totalItem.toFixed(2)}</div>
        <button class="btn-eliminar" data-nombre="${nombre}">&times;</button>
      `;
      listaProductos.appendChild(div);
    }

    const iva = subtotal * 0.15;
    const total = subtotal + iva;

    subtotalElem.textContent = `$${subtotal.toFixed(2)}`;
    ivaElem.textContent = `$${iva.toFixed(2)}`;
    totalElem.textContent = `$${total.toFixed(2)}`;

    // Agregar eventos para eliminar
    document.querySelectorAll(".btn-eliminar").forEach(btn => {
      btn.addEventListener("click", () => {
        const nombreEliminar = btn.dataset.nombre;
        delete carrito[nombreEliminar];
        actualizarCarrito();
      });
    });
  }

  btnComprar.addEventListener("click", () => {
    if (Object.keys(carrito).length === 0) {
      alert("El carrito está vacío.");
      return;
    }
    alert("Gracias por su compra.");
    for (const key in carrito) delete carrito[key];
    actualizarCarrito();
  });
});

