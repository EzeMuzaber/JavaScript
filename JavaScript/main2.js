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
}

function agregarAlCarrito(producto){
    carrito.push(producto);
    mostrarCarrito();
    
    //Swal.fire(`Producto "${producto.nombre}" agregado al carrito`);
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Producto "${producto.nombre}" agregado al carrito`,
        showConfirmButton: false,
        timer: 2000
      });
    
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
        Swal.fire(`Productos eliminados: ${productosEliminadosTexto}`);

    } else {
        //alert("El carrito ya estaba vacío.");
        Swal.fire("El carrito ya estaba vacío.");

    }
}

function reiniciarTodo(){

    // Ocultar el carrito, la sección de pago y la lista de productos
    document.getElementById("carrito").style.display = "none";
    document.getElementById("pago").style.display = "none";
    document.getElementById("listaProductos").innerHTML = "";

    //limpia el carrito y restablece el total a pagar
    carrito = [];
    document.getElementById("totalPagar").textContent = "";

    //cerrar el menu despues de seleccionar una opcion
    document.getElementById("opciones").style.display= "none";
}

function realizarPago(){
    document.getElementById("carrito").style.display = "block";
    document.getElementById("pago").style.display = "block";
}


function comprar(){
    realizarPago();
}
function calcularTotal(){
  
    const metodoPago = document.querySelector('input[name="metodoPago"]:checked');

        if (metodoPago) {
            const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
            const factor = (metodoPago.value === "tarjeta") ? 1.10 : 0.95;
            const totalPagar = (total * factor).toFixed(2);

            document.getElementById("totalPagar").textContent = `Total a pagar: $${totalPagar}`;
        } else {
            //alert("Selecciona un método de pago antes de calcular el total.");
            Swal.fire("Selecciona un método de pago antes de calcular el total.");
        }
}


let resumenCompra = "";

function finalizarCompra(){
    const metodoPago =document.querySelector('input[name="metodoPago"]:checked');

    if(!metodoPago){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Selecciona un método de pago antes de finalizar la compra.',
        })
        //alert("seleccione un metodo de pago antes de continuar.");
        return;
    }

    const total =carrito.reduce((acc,producto)  => acc + producto.precio,0);
    let recargo = 0.0;
    let descuento = 0.0;

    
    if(metodoPago.value === "tarjeta"){
        recargo = 0.10;
        //alert("Recargo del 10% aplicado por pago en tarjeta");
        Swal.fire({
            icon: 'info',
            title: 'Recargo aplicado',
            text: 'Recargo del 10% aplicado por pago en tarjeta.',
        }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
        });

    }else{
        descuento = 0.05;
        Swal.fire({
            icon: 'info',
            title: 'Descuento aplicado',
            text: 'Descuento del 5% aplicado por pago en efectivo.',
        })
        //alert("Descuento del 5% aplicado por pago en efectivo");
    }
    const importeFinal = (total * (1 + recargo - descuento)).toFixed(2);

    let resumenCompra = "Resumen de la compra: \n";
    resumenCompra += "Productos: \n";

    carrito.forEach(producto =>{
        resumenCompra += `${producto.nombre} - Precio: $${producto.precio}\n`;
    });

    resumenCompra += `\nMetodo de pago: ${metodoPago.value}\n`;

    if(recargo > 0 ) {
        resumenCompra +=  `Recargo: ${recargo * 100}%\n`;
    }else if(descuento > 0){
        resumenCompra +=  `Descuento: ${descuento * 100}%\n`;
    }
    //resumenCompra += `Recargo: ${recargo * 100}%\n`;
    resumenCompra += `Importe Final: $${importeFinal}\n`;
    
    Swal.fire({
        icon: 'info',
        title: 'Resumen de la compra',
        html: resumenCompra,
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

    //alert(resumenCompra);
}


function mostrarOpciones(){
    const opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "none" ? "block" : "none";
}