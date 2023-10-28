/* function simularCompra() {

    let total = 0;
    let continuarCompra = true;
    while (continuarCompra) {
        let productoNombre = prompt("Ingrese el nombre del producto a comprar (o escriba 'finalizar' para terminar la compra):");
        if (productoNombre.toLowerCase() === 'finalizar') {
            continuarCompra = false;
        } else {
            let producto = encontrarProductos(productoNombre);
            if (producto) {
                carrito.maps(producto);
                total += producto.precio;
                alert(`Producto agregado al : ${productoNombre}`);
            } else {
                alert("Producto no encontrado. Por favor, ingrese un producto válido.");
            }
        }
    }
}
 */

//declaracion de variables
let nombre, apellido;
let datosCorrectos = false;
let jugador;
let producto;
let opcionPrincipal;
let opcion;



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

//primer menu interactivo
while (opcionPrincipal.toLowerCase() != "salir") {

    opcionPrincipal = prompt(`
    
    ¿que desea hacer?

    a: Buscar un producto.

    b: Realizar una compra.

    c: ver los juegos segun edades.

    Escriba "salir" para finalizar el programa

    `);

    const productos = [
        { id: 1, nombre: "fornite", precio: 1500 },
        { id: 2, nombre: "pokemon go", precio: 2200 },
        { id: 3, nombre: "clash royale", precio: 950 },
        { id: 4, nombre: "battle royale", precio: 920 },
        { id: 5, nombre: "star wars: knights of the old republic", precio: 2500 },
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

    productos.forEach(producto => {
        listaProductos +=
        `ID: ${producto.id}, 
        Nombre: ${producto.nombre}, 
        Precio: $${producto.precio}\n`;
    });
    switch (opcionPrincipal) {
        //caso a: busqueda de producto
        case "a":
            nombre = prompt("ingrese el producto a buscar: ");
            encontrarProductos();
            mostrarProducto();
        
            while (nombre !== "salir") {
                let producto = encontrarProductos(nombre);
                mostrarProducto(producto);

                nombre = prompt("ingrese el producto a buscar: ");
            };
            break;

        //simulacion de compra con descuento
        case "b":
            const carrito = [];
            let compra =true;

            alert("Lista de productos disponibles:\n" + listaProductos);

            while (compra) {

                const idProducto = parseInt(prompt("Ingrese el ID del producto a comprar (o escriba '0' para finalizar la compra):"));
                
                if (idProducto === 0) {
                    compra =false;//usuario finalizando la compra si pone 0
                }else{
                    const productoEncontrado = encontrarProductosPorID(idProducto);
                    //const productoEncontrado = productos.find(producto => producto.id === idProducto);

                    if (productoEncontrado) {
                        carrito.push(productoEncontrado);
                        alert(`Producto agregado al carrito: ${productoEncontrado.nombre}`);
                    } else {
                        alert("Producto no encontrado. Por favor, ingrese un ID válido.");
                    }
                }
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

            break;

        case "c":
            break;

        case "salir":
            alert("Saliendo del programa. ¡Hasta luego!");
            break;

        default:
            alert("Opción incorrecta. Por favor, vuelva a intentarlo.");
            break;
    }
}

/* --------------------   FUNCIONES  ----------------------------------*/
/*    const producto = productos.find((item) => item.nombre === nombre);
         if (producto) {
             alert(`
             nombre: ${producto.nombre}
             precio: ${producto.precio}
             `);
         } else {
             alert("producto no encontrado")
         };
*/

/* while (opcionPrincipal.toLowerCase() != "salir") {
    opcionPrincipal = prompt(`
    como desea abonar?

    1: efectivo con un 15% de descuento

    2: tarjeta con un 10% de recargo
    `)
    switch (opcionPrincipal) {
        case "1":
            const descuento = productos.map((item) => {
                return {
                    nombre: item.nombre,
                    precio: item.precio - item.precio * 15,
                };
            });
            alert("El precio final es:", descuento);
            break;
        case "2":
            const recargo = productos.map((item) => {
                return {
                    nombre: item.nombre,
                    precio: item.precio + item.precio * 10,
                };
            });
            alert("El precio final es:", recargo);
            break;
        default:
            alert("Opción incorrecta. Por favor, elija 1, 2 o 'salir'.");
            break;
    }
} */