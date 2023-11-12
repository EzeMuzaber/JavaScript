
//declaracion de variables
let nombre, apellido;
let datosCorrectos = false;
let jugador;
let producto;
let opcionPrincipal;
let opcion;

/* let inicio = alert("Bienvenido al menu interactivo de juegos");
let inicio2 = alert("Por favor, preste atencion a las opciones de juegos, compra y busqueda.");
let inicio3 = alert(" buena suerte!!"); */

// 1: bienvenida y pedir datos al usuario
while (!datosCorrectos) {
    nombre = prompt("Porfavor ingrese su nombre: ");
    apellido = prompt("ingrese su apellido: ");

    if (nombre !== "" && apellido !== "") {
        datosCorrectos = true;
        jugador = nombre + " " + apellido;
        alert(`Hola, ${jugador}, le damos la bienvenida!!`);
    } else {
        alert(
            "Datos incorrectos. Por favor, ingrese su nombre y apellido nuevamente."
        );
    }
}
opcionPrincipal = "";
let programaActivo = true;

//primer menu interactivo
while (programaActivo) {

    opcionPrincipal = prompt(`
    
    ¿que desea hacer?

    a: Buscar un producto.

    b: Realizar una compra.

    c: ver los juegos segun edades.

    Escriba "salir" para finalizar el programa

    `).toLowerCase();

    const productos = [
        { id: 1, nombre: "fornite", precio: 1500 },
        { id: 2, nombre: "pokemon go", precio: 2200 },
        { id: 3, nombre: "clash royale", precio: 950 },
        { id: 4, nombre: "uno", precio: 910 },
        { id: 5, nombre: "call of duty", precio: 2500 },
        { id: 6, nombre: "gta iv", precio: 4000 },
        { id: 7, nombre: "candy crush", precio: 1100 },
    ];
    const encontrarProductos = nombre => {
        return productos.find(item => item.nombre === nombre);
    };
    const encontrarProductosPorID = id => {
        return productos.find(item => item.id === id);
    };
    const mostrarProducto = (productos) => {
        if (productos) {
            alert(`
                Id: ${productos.id}.
                Nombre: ${productos.nombre}.
                Precio: $${productos.precio}. 
                `);
        } else {
            alert("Producto no encontrado");
        }
    };

    let listaProductos = "";
    let resumenCompra = "";
    let total = 0;
    opcionSalir = true;
    productos.forEach(producto => {
        listaProductos +=
            `ID: ${producto.id}, 
        Nombre: ${producto.nombre}, 
        Precio: $${producto.precio}\n`;
    });
    switch (opcionPrincipal) {
        //caso a: busqueda de producto
        case "a":
            alert(`juegos disponibles:
            fornite.
            pokemon go.
            clash royale.
            uno.
            call of duty.
            gta iv.
            candy crush.
            `)
            let nombreProducto = prompt("ingrese el producto a buscar: ");
            encontrarProductos();

            while (nombreProducto.toLowerCase() !== "salir") {
                let producto = encontrarProductos(nombreProducto);
                mostrarProducto(producto);
                alert(`juegos disponibles:
                fornite.
                pokemon go.
                clash royale.
                uno.
                call of duty.
                gta iv.
                candy crush.
                `)
                nombreProducto = prompt("ingrese el producto a buscar: ");
            };
            break;

        //simulacion de compra con descuento
        case "b":
            const carrito = [];
            let compra = true;

            alert("Lista de productos disponibles:\n" + listaProductos);

            while (compra) {
                const idProducto = parseInt(prompt("Ingrese el ID del producto a comprar (o escriba '0' para finalizar la compra):"));

                if (idProducto === 0) {
                    compra = false;//usuario finalizando la compra si pone 0
                } else {
                    const productoEncontrado = encontrarProductosPorID(idProducto);
                    if (productoEncontrado) {
                        carrito.push(productoEncontrado);
                        alert(`Producto agregado al carrito: ${productoEncontrado.nombre}`);
                    } else {
                        alert("Producto no encontrado. Por favor, ingrese un ID válido.");
                    }
                    alert("Lista de productos disponibles:\n" + listaProductos);
                }
            }

            // Verificar si el carrito está vacío
            if (carrito.length === 0) {
                alert("No hay productos en el carrito. Debe agregar al menos un producto antes de pagar.");
                continue;
            }

            // Calcular el total de la compra
            total = 0;
            carrito.forEach(producto => {
                total += producto.precio;
            });

            // Mostrar el resumen de la compra en un alert
            resumenCompra = "resumen de la compra: ";
            carrito.forEach(producto => {
                resumenCompra +=
                    `\n
                Nombre: ${producto.nombre}\n
                Precio: $${producto.precio}\n`;
            });

            resumenCompra += `Total a pagar: $${total}`;
            alert(resumenCompra);

            let opcionPago = "";

            while (opcionPago !== "1" && opcionPago !== "2" && opcionPago !== "3") {
                opcionPago = prompt(`
            como desea abonar?

            1: efectivo con un 15% de descuento

            2: tarjeta con un 10% de recargo

            3: Volver al menu principal
            `)
                switch (opcionPago) {
                    case "1":
                        total *= 0.85;
                        alert(`
                    Total a pagar con descuento (efectivo)
                    para ${carrito.map(producto => producto.nombre).join(', ')}:
                    $${total.toFixed(2)}`);
                        break;
                    case "2":
                        total *= 1.1;
                        alert(`
                    Total a pagar con recargo (tarjeta)
                    para ${carrito.map(producto => producto.nombre).join(', ')}:
                    $${total.toFixed(2)}`)
                        break;
                    case "3":
                        compra = false;
                        break;
                    default:
                        alert("Opción incorrecta. Por favor, elija 1, 2 o 3 o 'salir'.");
                        break;
                }
                alert("Compra finalizada. Gracias por su compra.");
            }
            break;

        case "c":
            while (opcion === undefined || opcion.toLocaleLowerCase() != "volver") {

                opcion = prompt(`
                    ingrese su edad:
            
                    1. menor de 12 años.
            
                    2. entre 13 y 18 años.
            
                    3. 19 años o mas.
                    
                    Escriba "volver" para regresar al menu principal
                `);
                switch (opcion) {
                    case "1":
                        edadSeleccionada = "Menor de 12 años";
                        juegoSeleccionado = solicitarOpcion1();

                        alert("a continuacion elija la dificultad:");
                        dificultadSeleccionada = obtenerDificultad();
                        break;
                    case "2":
                        edadSeleccionada = "Entre 13 y 18 años";
                        juegoSeleccionado = solicitarOpcion2();

                        alert("a continuacion elija la dificultad:");
                        dificultadSeleccionada = obtenerDificultad();
                        break;
                    case "3":
                        edadSeleccionada = "19 años o  mas"
                        juegoSeleccionado = solicitarOpcion3();

                        alert("a continuacion elija la dificultad:");
                        dificultadSeleccionada = obtenerDificultad();
                        break;

                    case "volver":
                        break;

                    default:
                        alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
                        break;
                }

                alert(`
                    Nombre: ${jugador};
            
                    Edad: ${edadSeleccionada};
            
                    Juego elegido: ${juegoSeleccionado};
            
                    Dificultad: ${dificultadSeleccionada};
                    `);
                juegoSeleccionado = "";

            }
            break;

        case "salir":
            let opcionSalir = prompt(`
                ¿Desea salir del programa?
                1: Salir
                2: Volver al menú principal
            `)
            switch (opcionSalir) {
                case "1":
                    alert("Saliendo del programa. ¡Hasta luego!");
                    programaActivo = false;
                    break;
                case "2":
                    // No es necesario hacer nada aquí, el bucle continuará
                    break;
                default:
                    alert("Opción incorrecta. Por favor, elija 1 o 2.");
            }
            //programaActivo= false;
            break;

        default:
            alert("Opción incorrecta. Por favor, vuelva a intentarlo.");
            break;
    }
}

/* --------------------   FUNCIONES  ----------------------------------*/
function solicitarOpcion1() {
    let opcion1 = prompt(`seleccione el juego en las opciones: 

        1. Talking Tom: ¡A por el oro!.

        2. Stumble guys.

        3. Clash Royale.
        ` );
    switch (opcion1) {
        case "1":
            return "Talking Tom: ¡A por el oro!";
        case "2":
            return "Stumble guys";
        case "3":
            return "Clash Royale";
        default:
            alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
            solicitarOpcion1();
            break;
    }
}
function solicitarOpcion2() {
    let opcion2 = prompt(`
        1. Battle royale.

        2.Fornite.

        3. pokemon GO.
        `);
    switch (opcion2) {
        case "1":
            return "Battle royale";
        case "2":
            return "Fornite";

        case "3":
            return "Pokemon GO";
        default:
            alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
            solicitarOpcion2();
            break;

    }
}

function solicitarOpcion3() {
    let opcion3 = prompt(`
        1. Star Wars: Knights of the Old Republic.

        2. GTA IV.

        3. Candy Crush.
        `);
    switch (opcion3) {
        case "1":
            return "Star Wars: Knights of the Old Republic";

        case "2":
            return "GTA IV";

        case "3":
            return "Candy Crush";

        default:
            alert("Opcion incorrecta!!!! porfavor vuelva a intentarlo!!");
            solicitarOpcion3();
            break;
    }
}
function obtenerDificultad() {
    let dificultad = prompt(`
        1. Facil
        2. Medio
        3. Dificil
        `);
    switch (dificultad) {
        case "1":
            return "FACIL";
        case "2":
            return "MEDIO";
        case "3":
            return "DIFICIL";
        default:
            alert("Dificultad incorreta. Vuelva a intentarlo");
            obtenerDificultad();
            break;
    }
}