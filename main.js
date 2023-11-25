
function fetchProductos(){
    return new Promise(async (resolve,reject) =>{
        try{
            const response = await fetch('data.json');
            const products = await response.json();
            resolve (products);
        } catch(error){
            console.error('Error en la busqueda de productos: ',error);
            reject(error);
        }
    })
    
}

let carrito = [];
// Limpiar la lista antes de mostrar los productos
async function mostrarProductos() {
    const listaProductos = document.getElementById("listaProductos");
    listaProductos.innerHTML = "";

    try{
        const productos = await fetchProductos();

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
    }catch(error){
        console.error('Error al mostrar productos:', error);
    }
} 

function agregarAlCarrito(producto) {
    carrito.push(producto);
    mostrarCarrito();
    
    Swal.fire({
        title: `Producto "${producto.nombre}" agregado al carrito`,
        imageUrl: producto.imagen,
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
    });
    setTimeout(() => {
        Swal.close();
    }, 2000);
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
    // Copia de la lista de productos en el carrito
    const productosEliminados = carrito.slice(); 
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

function finalizarCompra() {
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');

    if (!metodoPago) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecciona un método de pago antes de finalizar la compra.',
        });
        return;
    }
    // Preguntar por el correo electrónico antes del resumen de compra
    Swal.fire({
        icon: 'question',
        title: '¿Deseas recibir una factura?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            // Usuario desea recibir una factura?
            Swal.fire({
                icon: 'question',
                title: 'Por favor, ingresa tu dirección de correo electrónico para enviar la factura:',
                input: 'email',
                inputPlaceholder: 'Correo electrónico',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Enviar factura',
                cancelButtonText: 'No enviar'
            }).then((emailResult) => {
                if (emailResult.isConfirmed) {
                    const email = emailResult.value;
                    // mostrar el resumen de la compra después de obtener el correo electrónico
                    mostrarResumenCompra(metodoPago, email);
                }
            });
        } else {
            // Usuario no desea recibir una factura, se muestra el resumen
            mostrarResumenCompra(metodoPago, null);
        }
    });
}
//Resumen de compra:
function mostrarResumenCompra(metodoPago, email) {
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
            ${email ? `<p>Correo electrónico: ${email}</p>` : ''}
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
}

function fetchJuegosPorEdades(){
    return new Promise(async(resolve,reject)=> {
        try{
            const response = await fetch('juegosPorEdades.json');
            const juegosPorEdades= await response.json();
            resolve(juegosPorEdades);
        }catch{
            console.error('Error en la busqueda de productos: ',error);
            reject(error);
        };
    });
};


let juegosPorEdades ={};
async function cargarJuegosPorEdades(){
    try{
        juegosPorEdades = await fetchJuegosPorEdades();
    }catch(error){
        console.log('Error al cargar juegos por edades:', error);
    }
}
cargarJuegosPorEdades();

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

