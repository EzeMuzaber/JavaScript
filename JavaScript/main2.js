function mostrarOpciones(){
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "none" ? "block" : "none";
}

const productos = [
    { id: 1, nombre: "fornite", precio: 1500 },
    { id: 2, nombre: "pokemon go", precio: 2200 },
    { id: 3, nombre: "clash royale", precio: 950 },
    { id: 4, nombre: "uno", precio: 910 },
    { id: 5, nombre: "call of duty", precio: 2500 },
    { id: 6, nombre: "gta iv", precio: 4000 },
    { id: 7, nombre: "candy crush", precio: 1100 },
];

let carrito = [];
// Limpiar la lista antes de mostrar los productos
function mostrarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `
        Nombre: ${producto.nombre},
        Precio: ${producto.precio}
        `;

        //agregamos un boton para agregar el producto al carrito
        const agregarBtn = document.createElement("button");
        agregarBtn.textContent = "agregar al carrito";
        agregarBtn.addEventListener("click", () => agregarAlCarrito(producto));
        
        li.appendChild(agregarBtn);

        listaProductos.appendChild(li);
    });

    //document.getElementById("opciones").style.display = "none";
}

function agregarAlCarrito(producto){
    //const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(producto);
    mostrarCarrito();
    //localStorage.setItem("carrito",JSON.stringify(carrito));
    
    //cambiar este alert por el que explico en la clase 13
    alert(`Producto "${producto.nombre}" agregado al carrito`);
}

function mostrarCarrito(){
    const carritoLista = document.getElementById("carritoLista");
    carritoLista.innerHTML = "";
    carrito.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `
        Nombre: ${producto.nombre},
        Precio: ${producto.precio}
        `;
        carritoLista.appendChild(li);
    });

    document.getElementById("carrito").style.display = "block";
}

function vaciarCarrito() {
    const productosEliminados = carrito.slice(); // Copia de la lista de productos en el carrito
    carrito = [];
    mostrarCarrito();

    if (productosEliminados.length > 0) {
        const productosEliminadosTexto = productosEliminados.map(producto => producto.nombre).join(", ");
        alert(`Productos eliminados: ${productosEliminadosTexto}`);
    } else {
        alert("El carrito ya estaba vacío.");
    }
}

function reiniciarTodo(){
    // Ocultar el carrito, la sección de pago y la lista de productos
    document.getElementById("carrito").style.display = "none";
    document.getElementById("pago").style.display = "none";
    document.getElementById("listaProductos").innerHTML = "";

    carrito = [];
    document.getElementById("totalPagar").textContent = "";

    document.getElementById("opciones").style.display= "none";
}

function realizarPago(){
    document.getElementById("carrito").style.display = "none";
    document.getElementById("pago").style.display = "block";
}

function calcularTotal(){
  
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');

        if (metodoPago) {
            const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
            const factor = (metodoPago.value === "tarjeta") ? 1.10 : 0.95;
            const totalPagar = (total * factor).toFixed(2);

            document.getElementById("totalPagar").textContent = `Total a pagar: $${totalPagar}`;
        } else {
            alert("Selecciona un método de pago antes de calcular el total.");
        }
}

function mostrarOpciones(){
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "none" ? "block" : "none";
}