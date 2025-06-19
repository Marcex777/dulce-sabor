// Funcion para mostrar un cuadro de dialogo emergente
function mostrarMensaje(){
    alert("Hola mundo :)");
}

// Variables
function imprimirVariables(){
    let nombre = "Rodrigo";
    let edad = 42;
    // Forma tradicional de concatenar cadenas
    console.log("nombre: ", nombre);
    console.log("edad: ", edad);
    // Forma moderna de concatenar cadenas
    console.log(`nombre: ${nombre}, edad: ${edad}`);
    // Otros tipos de impresión
    console.error("Error: bla bla bla");
    console.warn("Advertencia: x x x");
}

function arreglos(){
    // Arreglos
    let frutas = ['manzana', 'pera', 'banana'];
    // Bucle
    for(let f of frutas){
        console.log(f)
    }
    // Condicionales
    if (frutas[1] === 'pera'){
        console.log("La segunda fruta es una pera");
    }else{
        console.log('No es una pera');
    }
}
// Agregar evente a un elemento HTML
document.getElementById("btnSaludar").addEventListener(
    "click", function () {
        console.log("Hola!");
    }
);

// Modificar el HTML a través del DOM
document.getElementById("btnAgregar").addEventListener(
    "click", () => {
        // Obtener el elemnto "lista" (ul) del documento HTML
        let lista = document.getElementById("lista");
        // Creando un nuevo elemento HTML, li = list item
        let nuevoItem = document.createElement("li");
        // Obteniendo el total de ítems de la lista
        let totalItems = lista.childElementCount;
        // Agregando un contenido (texto) al item
        nuevoItem.textContent = `Item ${totalItems + 1}`;
        // Agregar item a la lista
        lista.appendChild(nuevoItem);
    }
);

document.getElementById("btnAddPalabra").addEventListener(
    "click", addPalabraLista
);

function addPalabraLista(){
    // Obtener el input del HTML
    let input = document.getElementById("txtEntrada");
    // Obtner el valor del input
    const texto = input.value.trim();
    if (texto === "") return;
    // Transformar a mayusculas
    const textMayuscula = texto.toUpperCase();
    // Agregar item a la lista
    let lista = document.getElementById("lstPalabras");
    // Creando un nuevo elemento HTML, li = list item
    let nuevoItem = document.createElement("li");
    // Agregando un contenido (texto) al item
    nuevoItem.textContent = textMayuscula;
    // Agregar item a la lista
    lista.appendChild(nuevoItem);
    // limpiar y establecer foco
    input.value = "";
    input.focus();
}