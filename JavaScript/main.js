function mostrarOpciones() {
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "none" ? "block" : "none";
}

const productos = [
    { id: 1, nombre: "Fornite", precio: 2300 },
    { id: 2, nombre: "Pokemon go", precio: 2500 },
    { id: 3, nombre: "Clash royale", precio: 1500 },
    { id: 4, nombre: "Uno", precio: 910 },
    { id: 5, nombre: "Call of duty", precio: 8000 },
    { id: 6, nombre: "Gta iv", precio: 8000 },
    { id: 7, nombre: "Candy crush", precio: 1100 },
    { id: 8, nombre: "Roblox", precio: 3000 },
    { id: 9, nombre: "Rocket League", precio: 2200 },
    { id: 10, nombre: "Left for dead 2", precio: 1500 },
    { id: 11, nombre: "Los Sims", precio: 1900 },
    { id: 12, nombre: "League of Legends", precio: 2500 },
    { id: 13, nombre: "Battlefield V", precio: 5500 },
];

let carrito = [];
// Limpiar la lista antes de mostrar los productos
function mostrarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.textContent = `
        Id: ${producto.id},
        Nombre: ${producto.nombre},
        Precio: $${producto.precio}
        `;

        //agregamos un boton para agregar el producto al carrito
        const agregarBtn = document.createElement("button");
        agregarBtn.textContent = "agregar al carrito";
        agregarBtn.addEventListener("click", () => agregarAlCarrito(producto));

        li.appendChild(agregarBtn);

        listaProductos.appendChild(li);
    });
}

function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();

    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Producto "${producto.nombre}" agregado al carrito`,
        showConfirmButton: false,
        timer: 1800
    });

}

function mostrarCarrito() {
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
        Swal.fire(`Productos eliminados: ${productosEliminadosTexto}`);

    } else {
        
        Swal.fire("El carrito ya estaba vacío.");

    }
}

function reiniciarTodo() {

    // Ocultar el carrito, la sección de pago y la lista de productos
    document.getElementById("carrito").style.display = "none";
    document.getElementById("pago").style.display = "none";
    document.getElementById("listaProductos").innerHTML = "";

    //limpia el carrito y restablece el total a pagar
    carrito = [];
    document.getElementById("totalPagar").textContent = "";

    //cerrar el menu despues de seleccionar una opcion
    document.getElementById("opciones").style.display = "none";
}

function realizarPago() {
    document.getElementById("carrito").style.display = "block";
    document.getElementById("pago").style.display = "block";
}


function comprar() {
    realizarPago();
}
function calcularTotal() {

    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');

    if (metodoPago) {
        const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        const factor = (metodoPago.value === "tarjeta") ? 1.10 : 0.95;
        const totalPagar = (total * factor).toFixed(2);

        document.getElementById("totalPagar").textContent = `Total a pagar: $${totalPagar}`;
    } else {
        Swal.fire("Selecciona un método de pago antes de calcular el total.");
    }
}


let resumenCompra = "";

function finalizarCompra() {
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');

    if (!metodoPago) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecciona un método de pago antes de finalizar la compra.',
        })
        return;
    }

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    let recargo = 0.0;
    let descuento = 0.0;

    metodoPago.value === "tarjeta" ? recargo = 0.10 : descuento = 0.05;

    const importeFinal = (total * (1 + recargo - descuento)).toFixed(2);

    const contenidoHTML = `
        <div>
            <p><strong>Resumen de compra:</strong></p>
            <p>Productos:</p>
            <ul>
                ${carrito.map(producto => `
                <li>
                    ${producto.nombre} -
                    $${producto.precio}
                </li>`).join('')}
            </ul>
            <p>Metodo de Pago: ${metodoPago.value}</p>
            ${recargo > 0 ? `<p>Recargo: ${recargo * 100}%</p>` : ''}
            ${descuento > 0 ? `<p>Descuento: ${descuento * 100}%</p>` : ''}
            <p>Importe Final: $${importeFinal}</p>
        </div>
    `;
    Swal.fire({
        icon: 'info',
        title: 'Resumen de la compra',
        html: contenidoHTML,
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Finalizar"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Compra Finalizada!",
                text: "Gracias por su compra!.",
                icon: "success"
            });
            reiniciarTodo();
        }
    });
};

const juegosPorEdades = {
    1: [
        { id: 1, nombre: "Fornite", precio: 2300 },
        { id: 2, nombre: "Uno", precio: 910 },
        { id: 3, nombre: "Los Sims", precio: 1900 },
        { id: 4, nombre: "Pokemon go", precio: 2500 },
    ],
    2: [
        { id: 1, nombre: "Clash royale", precio: 1500 },
        { id: 2, nombre: "League of Legends", precio: 2500 },
        { id: 3, nombre: "Candy crush", precio: 1100 },
        { id: 4, nombre: "Roblox", precio: 3000 },
    ],
    3: [
        { id:1,  nombre: "Rocket League", precio: 2200 },
        { id:2 , nombre: "Left for dead 2", precio: 1500 },
        { id:3,  nombre: "Battlefield V", precio: 5500 },
        { id:4, nombre: "Gta iv", precio: 8000 },
        { id:5, nombre: "Call of duty", precio: 8000 },
    ]};

document.getElementById("verJuegosPorEdades").addEventListener("click", mostrarOpciones);

function verJuegosPorEdades() {
    const opciones = {
        1: "Menores de 12 años",
        2: "Entre 13 y 18 años",
        3: "19 años o mas"
    };

    const seleccionEdad =prompt(`
    Seleccione la opcion de edad: \n\n
    1: ${opciones[1]}\n
    2: ${opciones[2]}\n
    3: ${opciones[3]}\n
    `);

    if (seleccionEdad in juegosPorEdades) {
        const juegos = juegosPorEdades[seleccionEdad];

        if (juegos.length > 0) {

            let mensajeJuegos =
                `<div>
            <p><strong>Juegos:</strong></p>`;
            juegos.forEach(juego => {
                mensajeJuegos += ` 
                <p>${juego.nombre} -
                Precio: $${juego.precio},</p>`;
            });
            mensajeJuegos += '</div>';

            swal.fire({
                icon: 'info',
                title: `Juegos: ${opciones[seleccionEdad]}`,
                html: mensajeJuegos,
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                showCancelButton: false,
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: 'Sin juegos disponibles',
                text: 'No hay juegos disponibles para la opción seleccionada.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK',
                showCancelButton: false,
            });
        }
    } else if (seleccionEdad) {
        Swal.fire({
            icon: 'error',
            title: 'Opción de edad no válida',
            text: 'Por favor, seleccione una opción de edad válida.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
            showCancelButton: false,
        });
    };
}



function mostrarOpciones() {
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "none" ? "block" : "none";
};