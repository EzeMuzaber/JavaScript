/* creacion e algoritmo para proxima entrega de ejemplo / practica

        1.Talking Tom: ¡A por el oro!.

        2. Stumble guys.

        3. Clash Royale.
        1. Battle royale.

        2.Fornite.

        3. pokemon GO.
        1. Star Wars: Knights of the Old Republic.

        2. GTA IV.

        3. Candy Crush.


*/

let productos = [
    { id: 1, nombre: "Fornite", precio: 1500 },
    { id: 2, nombre: "Pokemon GO", precio: 2200 },
    { id: 3, nombre: "Clash royale", precio: 950 },
    { id: 4, nombre: "battle royale", precio: 920 },
    { id: 5, nombre: "Star wars: knights of the old republic", precio: 2500 },
    { id: 6, nombre: "GTA IV", precio: 4000 },
    { id: 7, nombre: "Candy crush", precio: 1100 },
];
// funcion para encontrar un producto por su nombre
const encontrarProductos = nombre => {
    return productos.find(item => item.nombre === nombre);
};

//funcion pñara mostrar si existe y si no mostrar un mensaje correspondiente
const mostrarProducto = (producto) => {
    if (producto) {
        alert(`
    Id: ${producto.id}.
    Nombre: ${producto.nombre}.
    Precio: $${producto.precio}. 
    `);
    } else {
        alert("Producto no encontrado");
    }

};

//pedimos el nombre del producto a mostrar
let nombre = prompt("ingrese el producto a buscar: ");

//mientras que nombre sea diferente de salir todo se ejecuta normalmente
while (nombre != "salir") {
    //buscamos el producto
    let producto = encontrarProductos(nombre);
    //mostramos el producto
    mostrarProducto(producto);

    //volvemos a pedir el nombre del producto
    nombre = prompt("ingrese el producto a buscar: ");
};
alert("Gracias por su visita, vuelva pronto!!")